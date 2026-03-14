import type { TFunction } from 'i18next'

const dayKeyMap: Record<string, string> = {
	monday: 'days.monday',
	tuesday: 'days.tuesday',
	wednesday: 'days.wednesday',
	thursday: 'days.thursday',
	friday: 'days.friday',
	saturday: 'days.saturday',
	sunday: 'days.sunday',
}

export const translateDay = (t: TFunction, value: string) => {
	const key = dayKeyMap[value.trim().toLowerCase()]
	return key ? t(key) : value
}
