import { useMemo } from 'react'
import { Card, Typography, theme } from 'antd'
import { Line } from '@ant-design/plots'
import type { WeightProgressPoint } from '../../features/types'
import type { LineConfig } from '@ant-design/plots'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

interface WeightProgressChartProps {
	progress: WeightProgressPoint[]
	goalWeight: number
}

const WeightProgressChart = ({ progress, goalWeight }: WeightProgressChartProps) => {
	const { token } = theme.useToken()
	const { t } = useTranslation()

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
			title: (d: WeightProgressPoint) => t('report.charts.labels.week', { week: d.week }),
			items: [
				(d: WeightProgressPoint) => ({
					name: t('report.charts.labels.current'),
					value: t('report.charts.units.kg', { value: d.weightKg }),
				}),
				(_: WeightProgressPoint) => ({
					name: t('report.charts.labels.goal'),
					value: t('report.charts.units.kg', { value: goalWeight }),
				}),
				(d: WeightProgressPoint) => ({
					name: t('report.charts.labels.gap'),
					value: t('report.charts.units.kg', { value: (d.weightKg - goalWeight).toFixed(1) }),
				}),
			],
		},
	}), [progress, goalWeight, t, token.colorBgContainer, token.colorPrimary, token.colorPrimaryBg])
	console.log("WeightProgressChart___data", progress, goalWeight)
	return (
		<Card size="small" variant="outlined">
			<Title level={5}>{t('report.charts.weightProgress')}</Title>
			<Line {...config} />
		</Card>
	)
}

export default WeightProgressChart
