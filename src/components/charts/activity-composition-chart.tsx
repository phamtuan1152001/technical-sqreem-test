import { useMemo } from 'react'
import { Card, Typography, theme } from 'antd'
import { Radar } from '@ant-design/charts'
import type { ActivityComposition } from '../../features/types'
import type { RadarConfig } from '@ant-design/charts'

const { Title } = Typography

interface ActivityCompositionChartProps {
	composition: ActivityComposition
}

const toTitleCase = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

const ActivityCompositionChart = ({ composition }: ActivityCompositionChartProps) => {
	const { token } = theme.useToken()

	const data = useMemo(() => {
		return Object.entries(composition).map(([activity, value]) => ({
			activity: toTitleCase(activity),
			value,
		}))
	}, [composition])

	const config: RadarConfig = useMemo(() => ({
		data,
		xField: 'activity',
		yField: 'value',
		area: {
			style: {
				fill: token.colorPrimary,
				fillOpacity: 0.22,
			},
		},
		radius: 0.9,
		color: token.colorPrimary,
		style: {
			stroke: token.colorPrimary,
			lineWidth: 2,
		},
		point: {
			size: 2,
			style: {
				fill: token.colorBgContainer,
				stroke: token.colorPrimary,
				lineWidth: 1,
			},
		},
		tooltip: {
			title: '',
			items: [
				(d: { activity: string; value: number }) => ({
					name: d.activity,
					value: `${d.value}`,
				}),
			],
		},
	}), [data])
	// console.log("ActivityCompositionChart___data", {composition: Object.entries(composition), data})
	return (
		<Card size="small" variant="outlined">
			<Title level={5}>Activity Composition</Title>
			<Radar {...config} />
		</Card>
	)
}

export default ActivityCompositionChart
