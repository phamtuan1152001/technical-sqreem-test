export interface HealthReportPayload {
	name: string
	age: number
	weightKg: number
	heightCm: number
	goalWeightKg: number
	availableMinutesPerDay: number
}

export interface WeeklyExercisePlanItem {
	day: string
	exercise: string
	durationMinutes: number
	caloriesBurned: number
}

export interface NutritionBreakdown {
	proteinPercent: number
	carbsPercent: number
	fatPercent: number
}

export interface ExerciseEffortPoint {
	day: string
	caloriesBurned: number
	durationMinutes: number
}

export interface WeightProgressPoint {
	week: string
	weightKg: number
}

export interface ActivityComposition {
	cardio: number
	strength: number
	stretching: number
	rest: number
}

export interface BodyComposition {
	musclePercent: number
	fatPercent: number
	waterPercent: number
	bonePercent: number
}

export interface HealthReport {
	healthSummary: string
	bmi: number
	weeklyExercisePlan: WeeklyExercisePlanItem[]
	nutritionBreakdown: NutritionBreakdown
	estimatedWeeksToGoal: number
	weightProgress: WeightProgressPoint[]
	exerciseEffort: ExerciseEffortPoint[]
	bodyComposition: BodyComposition
	activityComposition: ActivityComposition
	goalWeightKg: number
}

export interface LLMResponseContent {
	type: 'output_text'
	annotations: unknown[]
	logprobs: unknown[]
	text: string
}

export interface LLMResponseOutput {
	id: string
	type: string
	status: string
	content: LLMResponseContent[]
	role: string
}

export interface LLMResponse {
	id: string
	object: string
	created_at: number
	status: string
	background: boolean
	billing: { payer: string }
	completed_at: number
	error: null
	frequency_penalty: number
	incomplete_details: null
	instructions: null
	max_output_tokens: null
	max_tool_calls: null
	model: string
	output: LLMResponseOutput[]
	parallel_tool_calls: boolean
	presence_penalty: number
	previous_response_id: string | null
	prompt_cache_key: string | null
	prompt_cache_retention: string | null
	reasoning: { effort: null; summary: null }
	safety_identifier: null
	service_tier: string
	store: boolean
	temperature: number
	text: { format: { type: string }; verbosity: string }
	tool_choice: string
	tools: unknown[]
	top_logprobs: number
	top_p: number
	truncation: string
	usage: {
		input_tokens: number
		input_tokens_details: { cached_tokens: number }
		output_tokens: number
		output_tokens_details: { reasoning_tokens: number }
		total_tokens: number
	}
	user: null
	metadata: Record<string, unknown>
}
