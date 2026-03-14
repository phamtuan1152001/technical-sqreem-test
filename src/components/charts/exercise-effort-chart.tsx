import { useMemo } from 'react'
import { Card, Typography, theme } from 'antd'
import { Column } from '@ant-design/charts'
import type { ExerciseEffortPoint } from '../../features/types'
import type { ColumnConfig } from '@ant-design/charts'
const { Title } = Typography

interface ExerciseEffortChartProps {
	effort: ExerciseEffortPoint[]
}

const ExerciseEffortChart = ({ effort }: ExerciseEffortChartProps) => {
	const { token } = theme.useToken()

	const data = useMemo(() => effort.flatMap((point) => [
		{ day: point.day, value: point.caloriesBurned, type: 'Calories burned (kcal):' },
		{ day: point.day, value: point.durationMinutes, type: 'Duration (min):' },
	]), [effort])

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
					value: d.type.includes('Calories') ? `${d.value} kcal` : `${d.value} min`,
				}),
			],
		},
	}), [data, token.colorPrimary, token.colorPrimaryBgHover])
	// console.log("ExerciseEffortChart___data", effort, data)
	return (
		<Card size="small" variant="outlined">
			<Title level={5}>Exercise Effort</Title>
			<Column {...config} />
		</Card>
	)
}

export default ExerciseEffortChart
