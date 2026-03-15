import type { LLMResponse } from "../features/types";

export const fallbackLlmResponse: LLMResponse = {
    "id": "resp_07368f8ca11060150069b6bf18612881918f4278b5aae16858",
    "object": "response",
    "created_at": 1773584152,
    "status": "completed",
    "background": false,
    "billing": {
        "payer": "developer"
    },
    "completed_at": 1773584158,
    "error": null,
    "frequency_penalty": 0,
    "incomplete_details": null,
    "instructions": null,
    "max_output_tokens": null,
    "max_tool_calls": null,
    "model": "gpt-4.1-2025-04-14",
    "output": [
        {
            "id": "msg_07368f8ca11060150069b6bf190094819186bc5a5e7b80ce6c",
            "type": "message",
            "status": "completed",
            "content": [
                {
                    "type": "output_text",
                    "annotations": [],
                    "logprobs": [],
                    "text": "```json\n{\n  \"infoUser\": {\n    \"name\": \"Tuan\",\n    \"age\": 30,\n    \"weightKg\": 75,\n    \"heightCm\": 170,\n    \"goalWeightKg\": 68,\n    \"availableMinutesPerDay\": 45\n  },\n  \"healthSummary\": \"Tuan is a 30-year-old aiming to reduce his weight from 75 kg to 68 kg. With a BMI slightly above the healthy range, a balanced approach of regular exercise and a moderate calorie deficit will help achieve the goal weight. A mix of cardio, strength, and flexibility exercises is recommended, alongside a macronutrient-balanced diet.\",\n  \"bmi\": 25.95,\n  \"goalWeightKg\": 68,\n  \"weeklyExercisePlan\": [\n    {\n      \"day\": \"Monday\",\n      \"exercise\": \"Cardio (Running/Cycling)\",\n      \"durationMinutes\": 45,\n      \"caloriesBurned\": 400\n    },\n    {\n      \"day\": \"Tuesday\",\n      \"exercise\": \"Strength Training (Full Body)\",\n      \"durationMinutes\": 40,\n      \"caloriesBurned\": 300\n    },\n    {\n      \"day\": \"Wednesday\",\n      \"exercise\": \"Cardio (HIIT Intervals)\",\n      \"durationMinutes\": 35,\n      \"caloriesBurned\": 350\n    },\n    {\n      \"day\": \"Thursday\",\n      \"exercise\": \"Strength Training (Upper Body + Core)\",\n      \"durationMinutes\": 40,\n      \"caloriesBurned\": 280\n    },\n    {\n      \"day\": \"Friday\",\n      \"exercise\": \"Cardio (Brisk Walking/Swimming)\",\n      \"durationMinutes\": 45,\n      \"caloriesBurned\": 350\n    },\n    {\n      \"day\": \"Saturday\",\n      \"exercise\": \"Stretching & Mobility (Yoga/Pilates)\",\n      \"durationMinutes\": 30,\n      \"caloriesBurned\": 120\n    },\n    {\n      \"day\": \"Sunday\",\n      \"exercise\": \"Rest or Light Activity (Leisure Walk)\",\n      \"durationMinutes\": 30,\n      \"caloriesBurned\": 100\n    }\n  ],\n  \"nutritionBreakdown\": {\n    \"proteinPercent\": 30,\n    \"carbsPercent\": 40,\n    \"fatPercent\": 30\n  },\n  \"estimatedWeeksToGoal\": 10,\n  \"weightProgress\": [\n    { \"week\": 0, \"weightKg\": 75 },\n    { \"week\": 2, \"weightKg\": 73.5 },\n    { \"week\": 4, \"weightKg\": 72 },\n    { \"week\": 6, \"weightKg\": 70.5 },\n    { \"week\": 8, \"weightKg\": 69 },\n    { \"week\": 10, \"weightKg\": 68 }\n  ],\n  \"exerciseEffort\": [\n    { \"day\": \"Monday\", \"caloriesBurned\": 400, \"durationMinutes\": 45 },\n    { \"day\": \"Tuesday\", \"caloriesBurned\": 300, \"durationMinutes\": 40 },\n    { \"day\": \"Wednesday\", \"caloriesBurned\": 350, \"durationMinutes\": 35 },\n    { \"day\": \"Thursday\", \"caloriesBurned\": 280, \"durationMinutes\": 40 },\n    { \"day\": \"Friday\", \"caloriesBurned\": 350, \"durationMinutes\": 45 },\n    { \"day\": \"Saturday\", \"caloriesBurned\": 120, \"durationMinutes\": 30 },\n    { \"day\": \"Sunday\", \"caloriesBurned\": 100, \"durationMinutes\": 30 }\n  ],\n  \"bodyComposition\": {\n    \"musclePercent\": 38,\n    \"fatPercent\": 22,\n    \"waterPercent\": 55,\n    \"bonePercent\": 4\n  },\n  \"activityComposition\": {\n    \"cardio\": 3,\n    \"strength\": 2,\n    \"stretching\": 1,\n    \"rest\": 1\n  }\n}\n```"
                }
            ],
            "role": "assistant"
        }
    ],
    "parallel_tool_calls": true,
    "presence_penalty": 0,
    "previous_response_id": null,
    "prompt_cache_key": null,
    "prompt_cache_retention": null,
    "reasoning": {
        "effort": null,
        "summary": null
    },
    "safety_identifier": null,
    "service_tier": "default",
    "store": true,
    "temperature": 0.3,
    "text": {
        "format": {
            "type": "text"
        },
        "verbosity": "medium"
    },
    "tool_choice": "auto",
    "tools": [],
    "top_logprobs": 0,
    "top_p": 1,
    "truncation": "disabled",
    "usage": {
        "input_tokens": 215,
        "input_tokens_details": {
            "cached_tokens": 0
        },
        "output_tokens": 868,
        "output_tokens_details": {
            "reasoning_tokens": 0
        },
        "total_tokens": 1083
    },
    "user": null,
    "metadata": {}
}