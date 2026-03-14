import { Card, Col, Row, Typography, theme } from 'antd'
import { useTranslation } from 'react-i18next'

const { Title, Text, Paragraph } = Typography

interface HealthSummaryProps {
  bmi: number
  summary: string
}

const HealthSummary = ({ bmi, summary }: HealthSummaryProps) => {
  const { token } = theme.useToken()
  const { t } = useTranslation()

  return (
    <Card size="small" style={{ backgroundColor: token.colorBgElevated }}>
      <Row gutter={[12, 12]}>
        <Col xs={24} md={12}>
          <Text type="secondary">{t('report.summary.bmi')}</Text>
          <Title level={3}>{bmi.toFixed(1)}</Title>
        </Col>
        <Col xs={24} md={12}>
          <Text type="secondary">{t('report.summary.healthSummary')}</Text>
          <Paragraph style={{ margin: 0 }}>{summary}</Paragraph>
        </Col>
      </Row>
    </Card>
  )
}

export default HealthSummary
