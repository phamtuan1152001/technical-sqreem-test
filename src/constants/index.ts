import type { LLMResponse } from "../features/types";

export const healthReportJsonSchema = {
    name: "health_report",
    strict: true,
    schema: {
        type: "object",
        additionalProperties: false,
        properties: {
            infoUser: {
                type: "object",
                additionalProperties: false,
                properties: {
                    name: { type: "string" },
                    age: { type: "number" },
                    weightKg: { type: "number" },
                    heightCm: { type: "number" },
                    goalWeightKg: { type: "number" },
                    availableMinutesPerDay: { type: "number" }
                },
                required: [
                    "name",
                    "age",
                    "weightKg",
                    "heightCm",
                    "goalWeightKg",
                    "availableMinutesPerDay"
                ]
            },
            healthSummary: { type: "string" },
            bmi: { type: "number" },
            goalWeightKg: { type: "number" },
            weeklyExercisePlan: {
                type: "array",
                items: {
                    type: "object",
                    additionalProperties: false,
                    properties: {
                        day: { type: "string" },
                        exercise: { type: "string" },
                        durationMinutes: { type: "number" },
                        caloriesBurned: { type: "number" }
                    },
                    required: ["day", "exercise", "durationMinutes", "caloriesBurned"]
                }
            },
            nutritionBreakdown: {
                type: "object",
                additionalProperties: false,
                properties: {
                    proteinPercent: { type: "number" },
                    carbsPercent: { type: "number" },
                    fatPercent: { type: "number" }
                },
                required: ["proteinPercent", "carbsPercent", "fatPercent"]
            },
            estimatedWeeksToGoal: { type: "number" },
            weightProgress: {
                type: "array",
                items: {
                    type: "object",
                    additionalProperties: false,
                    properties: {
                        week: { type: "number" },
                        weightKg: { type: "number" }
                    },
                    required: ["week", "weightKg"]
                }
            },
            exerciseEffort: {
                type: "array",
                items: {
                    type: "object",
                    additionalProperties: false,
                    properties: {
                        day: { type: "string" },
                        caloriesBurned: { type: "number" },
                        durationMinutes: { type: "number" }
                    },
                    required: ["day", "caloriesBurned", "durationMinutes"]
                }
            },
            bodyComposition: {
                type: "object",
                additionalProperties: false,
                properties: {
                    musclePercent: { type: "number" },
                    fatPercent: { type: "number" },
                    waterPercent: { type: "number" },
                    bonePercent: { type: "number" }
                },
                required: ["musclePercent", "fatPercent", "waterPercent", "bonePercent"]
            },
            activityComposition: {
                type: "object",
                additionalProperties: false,
                properties: {
                    cardio: { type: "number" },
                    strength: { type: "number" },
                    stretching: { type: "number" },
                    rest: { type: "number" }
                },
                required: ["cardio", "strength", "stretching", "rest"]
            }
        },
        required: [
            "infoUser",
            "healthSummary",
            "bmi",
            "goalWeightKg",
            "weeklyExercisePlan",
            "nutritionBreakdown",
            "estimatedWeeksToGoal",
            "weightProgress",
            "exerciseEffort",
            "bodyComposition",
            "activityComposition"
        ]
    }
}

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

export const fallbackLLMResponseVer2: any = {
    "infoUser": {
        "name": "Tuan",
        "age": 30,
        "weightKg": 75,
        "heightCm": 170,
        "goalWeightKg": 68,
        "availableMinutesPerDay": 45
    },
    "healthSummary": "Xin chào Tuan! Dựa trên các thông tin bạn cung cấp, chỉ số BMI hiện tại của bạn ở mức bình thường nhưng hơi gần ngưỡng thừa cân. Kế hoạch dưới đây giúp bạn giảm cân an toàn, duy trì sức khỏe và phát triển thể lực, phù hợp với quỹ thời gian 45 phút luyện tập mỗi ngày.",
    "bmi": 25.95,
    "goalWeightKg": 68,
    "weeklyExercisePlan": [
        {
            "day": "Thứ Hai",
            "exercise": "Đi bộ nhanh hoặc chạy bộ nhẹ",
            "durationMinutes": 45,
            "caloriesBurned": 320
        },
        {
            "day": "Thứ Ba",
            "exercise": "Tập gym, rèn luyện sức mạnh toàn thân (bụng, ngực, lưng, chân)",
            "durationMinutes": 45,
            "caloriesBurned": 300
        },
        {
            "day": "Thứ Tư",
            "exercise": "Đạp xe hoặc bơi lội",
            "durationMinutes": 45,
            "caloriesBurned": 320
        },
        {
            "day": "Thứ Năm",
            "exercise": "Tập HIIT nhẹ kết hợp giãn cơ",
            "durationMinutes": 45,
            "caloriesBurned": 340
        },
        {
            "day": "Thứ Sáu",
            "exercise": "Tập tạ hoặc bodyweight (hít đất, plank, squat)",
            "durationMinutes": 45,
            "caloriesBurned": 300
        },
        {
            "day": "Thứ Bảy",
            "exercise": "Yoga hoặc pilates, kéo giãn cơ thể",
            "durationMinutes": 45,
            "caloriesBurned": 180
        },
        {
            "day": "Chủ Nhật",
            "exercise": "Đi bộ thư giãn hoặc nghỉ ngơi chủ động",
            "durationMinutes": 30,
            "caloriesBurned": 120
        }
    ],
    "nutritionBreakdown": {
        "proteinPercent": 30,
        "carbsPercent": 45,
        "fatPercent": 25
    },
    "estimatedWeeksToGoal": 12,
    "weightProgress": [
        {
            "week": 1,
            "weightKg": 74.4
        },
        {
            "week": 2,
            "weightKg": 73.8
        },
        {
            "week": 3,
            "weightKg": 73.2
        },
        {
            "week": 4,
            "weightKg": 72.6
        },
        {
            "week": 5,
            "weightKg": 72
        },
        {
            "week": 6,
            "weightKg": 71.4
        },
        {
            "week": 7,
            "weightKg": 70.8
        },
        {
            "week": 8,
            "weightKg": 70.2
        },
        {
            "week": 9,
            "weightKg": 69.6
        },
        {
            "week": 10,
            "weightKg": 69
        },
        {
            "week": 11,
            "weightKg": 68.4
        },
        {
            "week": 12,
            "weightKg": 68
        }
    ],
    "exerciseEffort": [
        {
            "day": "Thứ Hai",
            "caloriesBurned": 320,
            "durationMinutes": 45
        },
        {
            "day": "Thứ Ba",
            "caloriesBurned": 300,
            "durationMinutes": 45
        },
        {
            "day": "Thứ Tư",
            "caloriesBurned": 320,
            "durationMinutes": 45
        },
        {
            "day": "Thứ Năm",
            "caloriesBurned": 340,
            "durationMinutes": 45
        },
        {
            "day": "Thứ Sáu",
            "caloriesBurned": 300,
            "durationMinutes": 45
        },
        {
            "day": "Thứ Bảy",
            "caloriesBurned": 180,
            "durationMinutes": 45
        },
        {
            "day": "Chủ Nhật",
            "caloriesBurned": 120,
            "durationMinutes": 30
        }
    ],
    "bodyComposition": {
        "musclePercent": 38,
        "fatPercent": 23,
        "waterPercent": 54,
        "bonePercent": 5
    },
    "activityComposition": {
        "cardio": 45,
        "strength": 30,
        "stretching": 15,
        "rest": 10
    }
}