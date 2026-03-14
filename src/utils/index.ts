import type { HealthReport, LLMResponse } from "../features/types"

export const parseResponse = (data: any): string => {
    if (typeof data === 'string') return data
    if (Array.isArray(data?.output)) {
        return data.output
            .map((step: any) => {
                if (typeof step === 'string') return step
                if (Array.isArray(step.content)) {
                    return step.content.map((item: any) => item?.text ?? '').join('')
                }
                return step.content?.text ?? ''
            })
            .join('')
    }
    if (data?.output?.[0]?.content) {
        const content = data.output[0].content
        if (Array.isArray(content)) {
            return content.map((item: any) => item?.text ?? '').join('')
        }
        return content?.text ?? ''
    }
    if (data?.choices?.[0]?.message?.content) {
        return data.choices[0].message.content
    }
    if (data?.choices?.[0]?.text) {
        return data.choices[0].text
    }
    return ''
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