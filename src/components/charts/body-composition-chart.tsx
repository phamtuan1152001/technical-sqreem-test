import { useMemo } from 'react'
import { Card, Typography, theme } from 'antd'
import { Pie } from '@ant-design/plots'
import type { BodyComposition } from '../../features//types'
import type { PieConfig } from '@ant-design/plots'

const { Title } = Typography

interface BodyCompositionChartProps {
	bodyComposition: BodyComposition
}

interface BodyCompositionDatum {
	type: string
	value: number
}

const BodyCompositionChart = ({ bodyComposition }: BodyCompositionChartProps) => {
	const { token } = theme.useToken()

	const data: BodyCompositionDatum[] = [
		{ type: 'Muscle', value: bodyComposition.musclePercent },
		{ type: 'Fat', value: bodyComposition.fatPercent },
		{ type: 'Water', value: bodyComposition.waterPercent },
		{ type: 'Bone', value: bodyComposition.bonePercent },
	]

	const config: PieConfig = useMemo(() => ({
		data,
		angleField: 'value',
		colorField: 'type',
		label: {
			text: (d: BodyCompositionDatum) => `${d.value}%`,
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
				(d: BodyCompositionDatum) => {
					return {
						name: d.type,
						value: `${d.value}%`,
					}
				},
			],
		},
		radius: 1,
		statistic: false,
		color: [
			token.colorPrimary,
			token.colorPrimaryHover,
			token.colorPrimaryActive,
			token.colorPrimaryBg,
		],
	}), [
		data,
		token.colorPrimary,
		token.colorPrimaryHover,
		token.colorPrimaryActive,
		token.colorPrimaryBg,
	])
	// console.log("BodyCompositionChart___data", bodyComposition, data)
	return (
		<Card size="small" variant="outlined">
			<Title level={5}>Body Composition</Title>
			<Pie {...config} />
		</Card>
	)
}

export default BodyCompositionChart
