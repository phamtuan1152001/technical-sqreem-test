import { useMemo } from 'react'
import { Card, Typography, theme } from 'antd'
import { Radar } from '@ant-design/charts'
import type { ActivityComposition } from '../../features/types'
import type { RadarConfig } from '@ant-design/charts'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

interface ActivityCompositionChartProps {
	composition: ActivityComposition
}

const ActivityCompositionChart = ({ composition }: ActivityCompositionChartProps) => {
	const { token } = theme.useToken()
	const { t } = useTranslation()

	const data = useMemo(() => {
		return Object.entries(composition).map(([activity, value]) => ({
			activity: t(`report.charts.labels.${activity}`, activity),
			value,
		}))
	}, [composition, t])

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
	}), [data, token.colorPrimary, token.colorBgContainer])
	// console.log("ActivityCompositionChart___data", {composition: Object.entries(composition), data})
	return (
		<Card size="small" variant="outlined">
			<Title level={5}>{t('report.charts.activityComposition')}</Title>
			<Radar {...config} />
		</Card>
	)
}

export default ActivityCompositionChart
