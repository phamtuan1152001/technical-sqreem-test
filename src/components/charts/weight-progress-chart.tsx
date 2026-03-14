import { useMemo } from 'react'
import { Card, Typography, theme } from 'antd'
import { Line } from '@ant-design/plots'
import type { WeightProgressPoint } from '../../features/types'
import type { LineConfig } from '@ant-design/plots'

const { Title } = Typography

interface WeightProgressChartProps {
	progress: WeightProgressPoint[]
	goalWeight: number
}

const WeightProgressChart = ({ progress, goalWeight }: WeightProgressChartProps) => {
	const { token } = theme.useToken()

	const config: LineConfig = useMemo(() => ({
		data: progress,
		xField: 'week',
		yField: 'weightKg',
		point: {
			shapeField: 'circle',
			sizeField: 4,
			style: {
				fill: token.colorBgContainer,
				stroke: token.colorPrimary,
				lineWidth: 4,
			},
		},
		interaction: {
			tooltip: {
				marker: false,
			},
		},
		style: {
			lineWidth: 2,
			stroke: token.colorPrimary,
		},
		area: {
			style: {
				fill: `linear-gradient(180deg, ${token.colorPrimaryBg} 0%, ${token.colorBgContainer} 100%)`,
			},
		},
		tooltip: {
			title: (d: WeightProgressPoint) => `Week: ${d.week}`,
			items: [
				(d: WeightProgressPoint) => ({
					name: 'Current',
					value: `${d.weightKg} kg`,
				}),
				(_: WeightProgressPoint) => ({
					name: 'Goal',
					value: `${goalWeight} kg`,
				}),
				(d: WeightProgressPoint) => ({
					name: 'Gap',
					value: `${(d.weightKg - goalWeight).toFixed(1)} kg`,
				}),
			],
		},
	}), [progress, goalWeight])
	// console.log("WeightProgressChart___data", progress, goalWeight)
	return (
		<Card size="small" variant="outlined">
			<Title level={5}>Weight Progress</Title>
			<Line {...config} />
		</Card>
	)
}

export default WeightProgressChart
