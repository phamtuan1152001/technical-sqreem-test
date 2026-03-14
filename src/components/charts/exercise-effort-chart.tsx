import { useMemo } from 'react'
import { Card, Typography, theme } from 'antd'
import { Column } from '@ant-design/charts'
import type { ExerciseEffortPoint } from '../../features/types'
import type { ColumnConfig } from '@ant-design/charts'
import { useTranslation } from 'react-i18next'
import { translateDay } from '../../i18n/helpers'
const { Title } = Typography

interface ExerciseEffortChartProps {
	effort: ExerciseEffortPoint[]
}

const ExerciseEffortChart = ({ effort }: ExerciseEffortChartProps) => {
	const { token } = theme.useToken()
	const { t } = useTranslation()

	const data = useMemo(() => effort.flatMap((point) => [
		{
			day: translateDay(t, point.day),
			value: point.caloriesBurned,
			type: t('report.charts.labels.caloriesBurned'),
		},
		{
			day: translateDay(t, point.day),
			value: point.durationMinutes,
			type: t('report.charts.labels.duration'),
		},
	]), [effort, t])

	const config: ColumnConfig = useMemo(() => ({
		data,
		xField: "day",
		yField: "value",
		seriesField: "type",
		isGroup: true,
		columnWidthRatio: 0.6,
		color: [token.colorPrimary, token.colorPrimaryBgHover],
		legend: {
			color: {
				title: false,
				position: 'top',
			},
		},
		tooltip: {
			items: [
				(d: { type: string; value: number }) => ({
					name: d.type,
					value: d.type === t('report.charts.labels.caloriesBurned')
						? t('report.charts.units.kcal', { value: d.value })
						: t('report.charts.units.min', { value: d.value }),
				}),
			],
		},
	}), [data, t, token.colorPrimary, token.colorPrimaryBgHover])
	console.log("ExerciseEffortChart___data", effort, data)
	return (
		<Card size="small" variant="outlined">
			<Title level={5}>{t('report.charts.exerciseEffort')}</Title>
			<Column {...config} />
		</Card>
	)
}

export default ExerciseEffortChart
