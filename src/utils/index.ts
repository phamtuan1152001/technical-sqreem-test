import type { HealthReport, LLMResponse } from "../features/types"

export const parseResponse = (data: any): string => {
    const text = data?.output?.[0]?.content?.[0]?.text

    if (typeof text !== "string") return ""

    const cleanText = text
        .replace(/^```[a-zA-Z]*\s*/, "")
        .replace(/```$/, "")
        .trim()

    return cleanText
}

export const normalizeReport = (report: HealthReport): HealthReport => {
    return {
        ...report,
        weeklyExercisePlan: report.weeklyExercisePlan ?? [],
        exerciseEffort: report.exerciseEffort ?? [],
        weightProgress: report.weightProgress ?? [],
    }
}

export const parseLlmResult = (response: LLMResponse): HealthReport => {
    const text = parseResponse(response)
    return normalizeReport(JSON.parse(text))
}