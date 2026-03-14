import type { LLMResponse } from "../features/types";

export const fallbackLlmResponse: LLMResponse = {
	id: 'resp_033d53052f9fe65b0069b43cf83224819daa7680505199455e',
	object: 'response',
	created_at: 1773419768,
	status: 'completed',
	background: false,
	billing: { payer: 'developer' },
	completed_at: 1773419783,
	error: null,
	frequency_penalty: 0,
	incomplete_details: null,
	instructions: null,
	max_output_tokens: null,
	max_tool_calls: null,
	model: 'gpt-4.1-2025-04-14',
	output: [
		{
			id: 'msg_033d53052f9fe65b0069b43cf8d960819d975523201b7007ec',
			type: 'message',
			status: 'completed',
			content: [
				{
					type: 'output_text',
					annotations: [],
					logprobs: [],
					text: `{
  "healthSummary": "You are currently at a healthy weight for your height, but aiming to lose 7 kg to reach your goal. With consistent exercise and a balanced diet, you can achieve your goal weight in a sustainable manner. Prioritizing both cardio and strength training will help preserve muscle mass while losing fat.",
  "bmi": 25.95,
  "goalWeightKg": 68,
  "weeklyExercisePlan": [
    { "day": "Monday", "exercise": "Cardio (Running)", "durationMinutes": 45, "caloriesBurned": 400 },
    { "day": "Tuesday", "exercise": "Strength Training (Full Body)", "durationMinutes": 45, "caloriesBurned": 300 },
    { "day": "Wednesday", "exercise": "Cardio (Cycling)", "durationMinutes": 45, "caloriesBurned": 350 },
    { "day": "Thursday", "exercise": "Strength Training (Upper Body)", "durationMinutes": 45, "caloriesBurned": 280 },
    { "day": "Friday", "exercise": "Cardio (Swimming)", "durationMinutes": 45, "caloriesBurned": 380 },
    { "day": "Saturday", "exercise": "Stretching & Yoga", "durationMinutes": 45, "caloriesBurned": 150 },
    { "day": "Sunday", "exercise": "Rest", "durationMinutes": 0, "caloriesBurned": 0 }
  ],
  "nutritionBreakdown": {
    "proteinPercent": 30,
    "carbsPercent": 40,
    "fatPercent": 30
  },
  "estimatedWeeksToGoal": 10,
  "weightProgress": [
    { "week": 0, "weightKg": 75 },
    { "week": 2, "weightKg": 73.6 },
    { "week": 4, "weightKg": 72.2 },
    { "week": 6, "weightKg": 70.8 },
    { "week": 8, "weightKg": 69.4 },
    { "week": 10, "weightKg": 68 }
  ],
  "exerciseEffort": [
    { "day": "Monday", "caloriesBurned": 400, "durationMinutes": 45 },
    { "day": "Tuesday", "caloriesBurned": 300, "durationMinutes": 45 },
    { "day": "Wednesday", "caloriesBurned": 350, "durationMinutes": 45 },
    { "day": "Thursday", "caloriesBurned": 280, "durationMinutes": 45 },
    { "day": "Friday", "caloriesBurned": 380, "durationMinutes": 45 },
    { "day": "Saturday", "caloriesBurned": 150, "durationMinutes": 45 },
    { "day": "Sunday", "caloriesBurned": 0, "durationMinutes": 0 }
  ],
  "bodyComposition": {
    "musclePercent": 38,
    "fatPercent": 22,
    "waterPercent": 55,
    "bonePercent": 4
  },
  "activityComposition": {
    "cardio": 3,
    "strength": 2,
    "stretching": 1,
    "rest": 1
  }
}`,
				},
			],
			role: 'assistant',
		},
	],
	parallel_tool_calls: true,
	presence_penalty: 0,
	previous_response_id: null,
	prompt_cache_key: null,
	prompt_cache_retention: null,
	reasoning: { effort: null, summary: null },
	safety_identifier: null,
	service_tier: 'default',
	store: true,
	temperature: 0.3,
	text: { format: { type: 'text' }, verbosity: 'medium' },
	tool_choice: 'auto',
	tools: [],
	top_logprobs: 0,
	top_p: 1,
	truncation: 'disabled',
	usage: {
		input_tokens: 186,
		input_tokens_details: { cached_tokens: 0 },
		output_tokens: 733,
		output_tokens_details: { reasoning_tokens: 0 },
		total_tokens: 919,
	},
	user: null,
	metadata: {},
}