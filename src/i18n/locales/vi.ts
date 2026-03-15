const vi = {
	app: {
		languageLabel: 'Ngôn ngữ',
		languages: {
			en: 'Tiếng Anh',
			vi: 'Tiếng Việt',
		},
	},
	home: {
		title: 'Thông tin sức khỏe với AI',
		description:
			'Nhập số liệu hiện tại để AI coach tạo lịch tập theo tuần, tỷ lệ dinh dưỡng và lộ trình cải thiện thể chất rõ ràng.',
	},
	form: {
		title: 'Thông tin của bạn',
		description: 'AI sẽ chuyển dữ liệu này thành kế hoạch sức khỏe và vận động có cấu trúc.',
		fields: {
			name: 'Họ tên',
			age: 'Tuổi',
			weightKg: 'Cân nặng (kg)',
			heightCm: 'Chiều cao (cm)',
			goalWeightKg: 'Cân nặng mục tiêu (kg)',
			availableMinutesPerDay: 'Thời gian tập mỗi ngày (phút)',
		},
		placeholders: {
			name: 'ví dụ: Minh',
		},
		validation: {
			requiredValue: 'Vui lòng nhập giá trị',
			nameRequired: 'Vui lòng nhập họ tên',
		},
		submit: 'Tạo báo cáo sức khỏe',
	},
	report: {
		title: 'Bảng điều khiển sức khỏe',
		exportPdf: 'Xuất PDF',
		fetchErrorTitle: 'Không thể tải báo cáo',
		empty: 'Hoàn thành form để tạo insight từ AI.',
		loading: 'Đang tạo báo cáo sức khỏe...',
		summary: {
			bmi: 'BMI',
			healthSummary: 'Tóm tắt sức khỏe',
		},
		timeline: {
			title: 'Tiến độ',
			estimatedWeeks: 'Số tuần dự kiến đến mục tiêu',
			weeks: '{{count}} tuần',
		},
		table: {
			title: 'Lịch tập luyện',
			columns: {
				day: 'Ngày',
				exercise: 'Bài tập',
				duration: 'Thời lượng (phút)',
				calories: 'Lượng calo tiêu hao',
			},
			units: {
				minutes: '{{value}} phút',
				calories: '{{value}} kcal',
			},
		},
		charts: {
			nutritionBreakdown: 'Tỷ lệ dinh dưỡng',
			exerciseEffort: 'Mức độ vận động',
			weightProgress: 'Tiến trình cân nặng',
			activityComposition: 'Cơ cấu hoạt động',
			bodyComposition: 'Thành phần cơ thể',
			labels: {
				protein: 'Đạm',
				carbs: 'Tinh bột',
				fat: 'Chất béo',
				muscle: 'Cơ bắp',
				water: 'Nước',
				bone: 'Xương',
				cardio: 'Cardio',
				strength: 'Sức mạnh',
				stretching: 'Giãn cơ',
				rest: 'Nghỉ ngơi',
				caloriesBurned: 'Calo tiêu hao (kcal)',
				duration: 'Thời lượng (phút)',
				current: 'Hiện tại',
				goal: 'Mục tiêu',
				gap: 'Chênh lệch',
				week: 'Tuần: {{week}}',
			},
			units: {
				kg: '{{value}} kg',
				kcal: '{{value}} kcal',
				min: '{{value}} phút',
			},
		},
	},
	errors: {
		unableToLoadReport: 'Không thể tải báo cáo lúc này.',
		failToFetchLlmService: 'Không thể gọi dịch vụ LLM.',
		llmUnexpectedPayload: 'LLM trả về dữ liệu không đúng định dạng.',
		unexpectedError: "Có lỗi xảy ra. Xin vui lòng thử lại sau."
	},
	days: {
		monday: 'Thứ Hai',
		tuesday: 'Thứ Ba',
		wednesday: 'Thứ Tư',
		thursday: 'Thứ Năm',
		friday: 'Thứ Sáu',
		saturday: 'Thứ Bảy',
		sunday: 'Chủ Nhật',
	},
	common: {
		notify: {
			title: 'Thông báo',
			move_to_desktop_export_pdf: "Vui lòng dùng thiết bị desktop để sử dụng tính năng này"
		}
	}
}

export default vi
