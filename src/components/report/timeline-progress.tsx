import { useMemo } from 'react'
import { Card, Progress, Typography, theme } from 'antd'

const { Title, Text } = Typography

interface TimelineProgressProps {
	estimatedWeeksToGoal: number
}

const TimelineProgress = ({ estimatedWeeksToGoal }: TimelineProgressProps) => {
	const { token } = theme.useToken()

	const timelinePercent = useMemo(() => {
	if (!estimatedWeeksToGoal) return 0
	return Math.max(5, Math.min(100, 100 - Math.round((estimatedWeeksToGoal / 40) * 100)))
	}, [estimatedWeeksToGoal])
	// console.log("TimelineProgress___data", estimatedWeeksToGoal)
	return (
		<Card size="small" variant="outlined">
			<Title level={5}>Timeline</Title>
			<Text type="secondary">Estimated weeks to goal</Text>
			<Title level={3} style={{ marginTop: 4 }}>
				{estimatedWeeksToGoal} weeks
			</Title>
			<Progress
				percent={timelinePercent}
				strokeLinecap="round"
				strokeColor={token.colorPrimary}
				railColor={token.colorPrimaryBg}
			/>
		</Card>
	)
}

export default TimelineProgress
