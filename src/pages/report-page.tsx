import { useRef } from 'react'
import { Alert, Button, Card, Col, Row, Space, Spin, Typography, theme } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { useAppSelector } from '../app/hooks'
import { exportHealthReportPdf } from '../utils/export-pdf'

// @components report
import HealthSummary from '../components/report/health-summary'
import ExerciseCalenderTable from '../components/report/exercise-calendar-table'
import TimelineProgress from '../components/report/timeline-progress'

// @component chart
import ActivityCompositionChart from '../components/charts/activity-composition-chart'
import BodyCompositionChart from '../components/charts/body-composition-chart'
import ExerciseEffortChart from '../components/charts/exercise-effort-chart'
import NutritionBreakdownChart from '../components/charts/nutrition-breakdown-chart'
import WeightProgressChart from '../components/charts/weight-progress-chart'

const { Title, Text } = Typography

const ReportPage = () => {
	const { token } = theme.useToken()
	const { report, loading, error } = useAppSelector((state) => state.healthReport)
	const containerRef = useRef<HTMLDivElement>(null)

	const handleExport = async () => {
		await exportHealthReportPdf(containerRef.current)
	}

	if (loading) {
		return (
			<Card variant="outlined" size="small">
				<Space orientation="vertical" size={16} style={{ width: '100%' }}>
					<SpinnerContent />
				</Space>
			</Card>
		)
	}

	return (
		<Card variant="outlined" size="small" className='report-page-wrapper'>
			<div ref={containerRef} style={{ padding: 0, background: token.colorBgContainer }} className='report-page-wrapper_content'>
				<Row justify="space-between" align="middle" style={{ paddingBottom: 12 }}>
					<Title level={4}>Health Intelligence Dashboard</Title>
					<Button className="no-export" type="primary" icon={<DownloadOutlined />} onClick={handleExport} disabled={!report}>
						Export as PDF
					</Button>
				</Row>

				{error && (
					<Alert type="error" message="Unable to fetch report" description={error} showIcon closable style={{ marginBottom: 8 }} />
				)}

				{!report ? (
					<Text type="secondary">Complete the form to trigger the AI-generated insights.</Text>
				) : (
					<div className='report-page-wrapper_body'>
						<div className="pdf-section">
							<HealthSummary bmi={report.bmi} summary={report.healthSummary} />
						</div>

						<div className='report-page-wrapper_body_info'>
							<div className="pdf-section">
								<TimelineProgress estimatedWeeksToGoal={report.estimatedWeeksToGoal} />
							</div>

							<div className="pdf-section">
								<ExerciseCalenderTable weeklyExercisePlan={report.weeklyExercisePlan} />
							</div>

							<Row gutter={[16, 16]}>
								<Col xs={24} md={12} xl={8}>
									<div className="pdf-section">
										<NutritionBreakdownChart nutrition={report.nutritionBreakdown} />
									</div>
								</Col>
								<Col xs={24} md={12} xl={16}>
									<div className="pdf-section">
										<ExerciseEffortChart effort={report.exerciseEffort} />
									</div>
								</Col>
							</Row>

							<div className="pdf-section">
								<WeightProgressChart progress={report.weightProgress} goalWeight={report.goalWeightKg} />
							</div>

							<Row gutter={[16, 16]}>
								<Col xs={24} lg={12}>
									<div className="pdf-section">
										<ActivityCompositionChart composition={report.activityComposition} />
									</div>
								</Col>
								<Col xs={24} lg={12}>
									<div className="pdf-section">
										<BodyCompositionChart bodyComposition={report.bodyComposition} />
									</div>
								</Col>
							</Row>
						</div>
					</div>
				)}
			</div>
		</Card>
	)
}

const SpinnerContent = () => (
	<Space orientation="vertical" size={8} align="center" style={{ width: '100%' }}>
		<Spin />
		<Text type="secondary">Generating your health report...</Text>
	</Space>
)

export default ReportPage
