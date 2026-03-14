import axios from 'axios'
import type { HealthReport, HealthReportPayload } from '../features/types'
import { fallbackLlmResponse } from '../constants'
import { normalizeReport, parseLlmResult, parseResponse } from '../utils'

const OPENAI_URL = import.meta.env.VITE_OPENAI_API_URL
const MODEL = 'gpt-4.1'

const buildPrompt = (payload: HealthReportPayload) => {
  return `You are a certified health coach. Return a single JSON object with the following keys: healthSummary (string), bmi (number), goalWeightKg (number), weeklyExercisePlan (array of { day, exercise, durationMinutes, caloriesBurned }), nutritionBreakdown (object with proteinPercent, carbsPercent, fatPercent), estimatedWeeksToGoal (number), weightProgress (array of { week, weightKg }), exerciseEffort (array of { day, caloriesBurned, durationMinutes }), bodyComposition (object with musclePercent, fatPercent, waterPercent, bonePercent), and activityComposition (object with cardio, strength, stretching, rest as numbers). Use the following user data to shape your recommendations: ${JSON.stringify(payload)}. Reply with JSON only.`
}

export const fetchHealthReport = async (payload: HealthReportPayload): Promise<HealthReport> => {
  // console.log("fetchHealthReport__payload", payload)
  const apiKey = /* import.meta.env.VITE_OPENAI_API_KEY */ ""
  if (!apiKey) {
    return parseLlmResult(fallbackLlmResponse)
  }

  const prompt = buildPrompt(payload)
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

    const text = parseResponse(response.data)
    if (!text) {
      throw new Error('LLM returned an unexpected payload.')
    }

    const parsed = JSON.parse(text) as HealthReport
    return normalizeReport(parsed)
  } catch (error) {
    console.error('Fail to load LLM service.', error)
    return parseLlmResult(fallbackLlmResponse)
  }
}
