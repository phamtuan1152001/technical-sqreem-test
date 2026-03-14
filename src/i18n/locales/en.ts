const en = {
	app: {
		languageLabel: 'Language',
		languages: {
			en: 'English',
			vi: 'Vietnamese',
		},
	},
	home: {
		title: 'AI-powered Health Insights',
		description:
			'Share your current stats and the AI coach will build a weekly exercise calendar, macros, and a clear body composition path.',
	},
	form: {
		title: 'Tell us about yourself',
		description: 'The AI will translate this into a structured health and movement plan.',
		fields: {
			name: 'Name',
			age: 'Age',
			weightKg: 'Weight (kg)',
			heightCm: 'Height (cm)',
			goalWeightKg: 'Goal Weight (kg)',
			availableMinutesPerDay: 'Available Exercise Time Per Day (minutes)',
		},
		placeholders: {
			name: 'e.g. Taylor',
		},
		validation: {
			requiredValue: 'Please enter a value',
			nameRequired: 'Name is required',
		},
		submit: 'Generate Health Report',
	},
	report: {
		title: 'Health Intelligence Dashboard',
		exportPdf: 'Export as PDF',
		fetchErrorTitle: 'Unable to fetch report',
		empty: 'Complete the form to trigger the AI-generated insights.',
		loading: 'Generating your health report...',
		summary: {
			bmi: 'BMI',
			healthSummary: 'Health summary',
		},
		timeline: {
			title: 'Timeline',
			estimatedWeeks: 'Estimated weeks to goal',
			weeks: '{{count}} weeks',
		},
		table: {
			title: 'Exercise Calendar',
			columns: {
				day: 'Day',
				exercise: 'Exercise',
				duration: 'Duration (min)',
				calories: 'Calories Burned',
			},
			units: {
				minutes: '{{value}} min',
				calories: '{{value}} kcal',
			},
		},
		charts: {
			nutritionBreakdown: 'Nutrition Breakdown',
			exerciseEffort: 'Exercise Effort',
			weightProgress: 'Weight Progress',
			activityComposition: 'Activity Composition',
			bodyComposition: 'Body Composition',
			labels: {
				protein: 'Protein',
				carbs: 'Carbs',
				fat: 'Fat',
				muscle: 'Muscle',
				water: 'Water',
				bone: 'Bone',
				cardio: 'Cardio',
				strength: 'Strength',
				stretching: 'Stretching',
				rest: 'Rest',
				caloriesBurned: 'Calories burned (kcal)',
				duration: 'Duration (min)',
				current: 'Current',
				goal: 'Goal',
				gap: 'Gap',
				week: 'Week: {{week}}',
			},
			units: {
				kg: '{{value}} kg',
				kcal: '{{value}} kcal',
				min: '{{value}} min',
			},
		},
	},
	errors: {
		unableToLoadReport: 'Unable to load a report right now.',
		failToFetchLlmService: 'Fail to fetch the LLM service.',
		llmUnexpectedPayload: 'LLM returned an unexpected payload.',
	},
	days: {
		monday: 'Monday',
		tuesday: 'Tuesday',
		wednesday: 'Wednesday',
		thursday: 'Thursday',
		friday: 'Friday',
		saturday: 'Saturday',
		sunday: 'Sunday',
	},
}

export default en
