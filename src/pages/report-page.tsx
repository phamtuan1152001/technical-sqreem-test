import { Alert, Button, Card, Col, Row, Space, Spin, Typography, theme } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { useRef } from 'react'
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
  console.log("ReportPage__data", report)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleExport = async () => {
    try {
      await exportHealthReportPdf(containerRef.current)
    } catch (exportError) {
      console.error(exportError)
    }
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
    <Card variant="outlined" size="small">
      <div ref={containerRef} style={{ padding: 12, background: token.colorBgContainer }}>
        <Row justify="space-between" align="middle">
          <Title level={4}>Health Intelligence Dashboard</Title>
          <Button type="primary" icon={<DownloadOutlined />} onClick={handleExport} disabled={!report}>
            Export as PDF
          </Button>
        </Row>

        {error && (
          <Alert type="error" message="Unable to fetch report" description={error} showIcon closable style={{ marginBottom: 8 }} />
        )}

        {!report ? (
          <Text type="secondary">Complete the form to trigger the AI-generated insights.</Text>
        ) : (
          <Space orientation="vertical" size="large" style={{ width: '100%' }}>
            {/* Health summary section */}
            <HealthSummary bmi={report.bmi} summary={report.healthSummary} />

            {/* Exercise calender section */}
            <ExerciseCalenderTable weeklyExercisePlan={report.weeklyExercisePlan} />

            {/* Nutrition Breakdown and Exercise Effort chart section */}
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12} xl={8}>
                <NutritionBreakdownChart nutrition={report.nutritionBreakdown} />
              </Col>
              <Col xs={24} md={12} xl={16}>
                <ExerciseEffortChart effort={report.exerciseEffort} />
              </Col>
            </Row>

            {/* Weight and Timeline progress section */}
            <Row gutter={[16, 16]}>
              <Col xs={24} lg={16}>
                <WeightProgressChart progress={report.weightProgress} goalWeight={report.goalWeightKg} />
              </Col>
              <Col xs={24} lg={8}>
                <TimelineProgress estimatedWeeksToGoal={report.estimatedWeeksToGoal} />
              </Col>
            </Row>

            {/* Activity and Body composition section */}
            <Row gutter={[16, 16]}>
              <Col xs={24} lg={12}>
                <ActivityCompositionChart composition={report.activityComposition} />
              </Col>
              <Col xs={24} lg={12}>
                <BodyCompositionChart bodyComposition={report.bodyComposition} />
              </Col>
            </Row>
          </Space>
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
