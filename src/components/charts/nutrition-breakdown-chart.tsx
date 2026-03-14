import { useMemo } from 'react'
import { Card, Typography, theme } from 'antd'
import { Pie } from '@ant-design/plots'
import type { PieConfig } from '@ant-design/plots'
import type { NutritionBreakdown } from '../../features/types'

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

	const data: NutritionDatum[] = useMemo(() => {
		return [
			{ type: 'Protein', value: nutrition.proteinPercent },
			{ type: 'Carbs', value: nutrition.carbsPercent },
			{ type: 'Fat', value: nutrition.fatPercent },
		]
	}, [nutrition])

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
	// console.log("NutritionBreakdownChart___data", nutrition, data)
	return (
		<Card size="small" variant="outlined">
			<Title level={5}>Nutrition Breakdown</Title>
			<Pie {...config} />
		</Card>
	)
}

export default NutritionBreakdownChart
