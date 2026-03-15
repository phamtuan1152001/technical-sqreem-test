import axios from 'axios'
import type { HealthReport, HealthReportPayload } from '../features/types'
import { fallbackLlmResponse, fallbackLLMResponseVer2, healthReportJsonSchema } from '../constants'
import { normalizeReport, parseLlmResult, parseResponse } from '../utils'
import i18n, { LANGUAGE_STORAGE_KEY } from '../i18n'

const OPENAI_URL = import.meta.env.VITE_OPENAI_API_URL
const MODEL = 'gpt-4.1'
const apiKey = /* import.meta.env.VITE_OPENAI_API_KEY */ ""
const apiUrl = import.meta.env.VITE_OPENAI_API_URL

const getPreferredLanguage = () => {
	const i18nLanguage = i18n.resolvedLanguage || i18n.language
	if (i18nLanguage) return i18nLanguage
	if (typeof window === 'undefined') return 'en'
	return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'en'
}

/* VERSION WITH PROMPT-ONLY (AS NATURAL STYLE) */
const buildPrompt = (payload: HealthReportPayload, language: string) => {
	const languageInstruction = language.startsWith('vi')
		? 'Write all user-facing text values in Vietnamese.'
		: 'Write all user-facing text values in English.'

	return `
You are a certified health coach and fitness advisor.

Return exactly one valid JSON object.
Do not wrap the response in markdown.
Do not include any explanation, notes, or extra text outside the JSON.

Use exactly this JSON structure and property names:

{
	"infoUser": {
		"name": "string",
		"age": "number",
		"weightKg": "number",
		"heightCm": "number",
		"goalWeightKg": "number",
		"availableMinutesPerDay": "number"
	},
	"healthSummary": "string",
	"bmi": "number",
	"goalWeightKg": "number",
	"weeklyExercisePlan": [
		{
			"day": "string",
			"exercise": "string",
			"durationMinutes": "number",
			"caloriesBurned": "number"
		}
	],
	"nutritionBreakdown": {
		"proteinPercent": "number",
		"carbsPercent": "number",
		"fatPercent": "number"
	},
	"estimatedWeeksToGoal": "number",
	"weightProgress": [
		{
			"week": "number",
			"weightKg": "number"
		}
	],
	"exerciseEffort": [
		{
			"day": "string",
			"caloriesBurned": "number",
			"durationMinutes": "number"
		}
	],
	"bodyComposition": {
		"musclePercent": "number",
		"fatPercent": "number",
		"waterPercent": "number",
		"bonePercent": "number"
	},
	"activityComposition": {
		"cardio": "number",
		"strength": "number",
		"stretching": "number",
		"rest": "number"
	}
}

Rules:
- Keep all JSON property names exactly as written in English.
- ${languageInstruction}
- Calculate BMI using: weightKg / ((heightCm / 100) ^ 2).
- weeklyExercisePlan must contain exactly 7 items, one for each day of the week.
- exerciseEffort must contain exactly 7 items, matching the same days as weeklyExercisePlan.
- weightProgress must start at week 1 and continue until estimatedWeeksToGoal.
- estimatedWeeksToGoal should be realistic and based on a safe weight-loss pace.
- nutritionBreakdown percentages must sum to 100.
- bodyComposition percentages must sum to 100.
- activityComposition values must sum to 100.
- All numeric fields must be valid JSON numbers, not strings.
- Make recommendations practical, safe, and realistic for the user's availableMinutesPerDay.
- Do not include null unless absolutely necessary.
- Respond with JSON only.

User data:
${JSON.stringify(payload, null, 2)}
`.trim()
}

export const fetchHealthReport = async (payload: HealthReportPayload): Promise<HealthReport> => {
	// console.log("fetchHealthReport__payload", payload)

	if (!apiKey) {
		return parseLlmResult(fallbackLlmResponse)
	}

	const prompt = buildPrompt(payload, getPreferredLanguage())
	try {
		const response = await axios.post(
			OPENAI_URL,
			{
				model: MODEL,
				input: prompt,
				temperature: 0.3,
			},
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
					'Content-Type': 'application/json',
				},
			},
		)

		const text = parseResponse(response.data) /* undefined */
		if (!text) {
			throw new Error('errors.unexpectedError')
		}

		const parsed = JSON.parse(text) as HealthReport
		return normalizeReport(parsed)
	} catch (error) {
		console.error('Fail to load LLM service.', error)
		throw new Error('errors.unexpectedError')
	}
}

/* VERSION WITH FORCE SCHEMA */
export const buildHealthInstructions = (language: string) => {
	const localizedText =
		language.startsWith("vi")
			? "Write all user-facing text values in Vietnamese."
			: "Write all user-facing text values in English."

	return [
		"You are a certified health coach and fitness advisor.",
		"Generate a safe, practical, realistic health report.",
		"Calculate BMI using weightKg / ((heightCm / 100) ^ 2).",
		"Keep recommendations appropriate for the user's availableMinutesPerDay.",
		"weeklyExercisePlan should cover 7 days.",
		"exerciseEffort should align with the exercise plan days.",
		"Use a realistic and safe pace for estimatedWeeksToGoal.",
		"nutritionBreakdown should total about 100.",
		"bodyComposition should total about 100.",
		"activityComposition should total about 100.",
		localizedText
	].join(" ")
}

export const generateHealthReport = async (payload: HealthReportPayload) => {
	if (!apiKey) {
		return fallbackLLMResponseVer2
	}

	const instructions = buildHealthInstructions(getPreferredLanguage())
	let data: any
	try {
		const response = await axios.post(
			apiUrl,
			{
				model: "gpt-4.1",
				instructions,
				input: [
					{
						role: "user",
						content: [
							{
								type: "input_text",
								text: `User data:\n${JSON.stringify(payload, null, 2)}`
							}
						]
					}
				],
				text: {
					format: {
						type: "json_schema",
						name: healthReportJsonSchema.name,
						strict: healthReportJsonSchema.strict,
						schema: healthReportJsonSchema.schema
					}
				}
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${apiKey}`
				}
			}
		)

		data = response.data
	} catch (error: any) {
		const status = error?.response?.status
		const errorBody = error?.response?.data
			? JSON.stringify(error.response.data)
			: error?.message || "Unknown error"
		throw new Error(`OpenAI request failed: ${status ?? "unknown"} - ${errorBody}`)
	}

	const jsonText = data.output_text || data.output?.[0]?.content?.find((item: any) => item.type === "output_text")?.text

	if (!jsonText) {
		throw new Error('errors.unexpectedError')
	}

	// console.log("generateHealthReport___data", {jsonText: jsonText, jsonTextParse: JSON.parse(jsonText)})
	return JSON.parse(jsonText)
}
