import { useMemo } from 'react'
import { Card, Typography, theme } from 'antd'
import { Pie } from '@ant-design/plots'
import type { PieConfig } from '@ant-design/plots'
import type { NutritionBreakdown } from '../../features/types'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

interface NutritionBreakdownChartProps {
	nutrition: NutritionBreakdown
}

interface NutritionDatum {
	type: string
	value: number
}

const NutritionBreakdownChart = ({ nutrition }: NutritionBreakdownChartProps) => {
	const { token } = theme.useToken()
	const { t } = useTranslation()

	const data: NutritionDatum[] = useMemo(() => {
		return [
			{ type: t('report.charts.labels.protein'), value: nutrition.proteinPercent },
			{ type: t('report.charts.labels.carbs'), value: nutrition.carbsPercent },
			{ type: t('report.charts.labels.fat'), value: nutrition.fatPercent },
		]
	}, [nutrition, t])

	const config: PieConfig = useMemo(() => ({
		data,
		angleField: 'value',
		colorField: 'type',
		label: {
			text: (d: NutritionDatum) => `${d.value}%`,
			style: {
				fontWeight: 'bold',
			},
		},
		legend: {
			color: {
				title: false,
				position: 'right',
				rowPadding: 5,
			},
		},
		tooltip: {
			items: [
				(d: NutritionDatum) => {
					return {
						name: d.type,
						value: `${d.value}%`,
					}
				},
			],
		},
		color: [token.colorPrimary, token.colorPrimaryHover, token.colorPrimaryBg],
	}), [data, token.colorPrimary, token.colorPrimaryHover, token.colorPrimaryBg])
	console.log("NutritionBreakdownChart___data", nutrition, data)
	return (
		<Card size="small" variant="outlined">
			<Title level={5}>{t('report.charts.nutritionBreakdown')}</Title>
			<Pie {...config} />
		</Card>
	)
}

export default NutritionBreakdownChart
