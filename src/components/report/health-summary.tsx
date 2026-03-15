import { Card, Col, Row, Typography, theme } from 'antd'
import { useTranslation } from 'react-i18next'
import type { HealthReportPayload } from '../../features/types'

const { Title, Text, Paragraph } = Typography

interface HealthSummaryProps {
  bmi: number
  summary: string
  infoUser: HealthReportPayload
}

const HealthSummary = ({ bmi, summary, infoUser }: HealthSummaryProps) => {
  const { token } = theme.useToken()
  const { t } = useTranslation()
  console.log("HealthSummary___data", bmi, summary, infoUser)
  return (
    <Card size="small" style={{ backgroundColor: token.colorBgElevated }}>
      <Row gutter={[12, 12]}>
        <Col xs={24} md={12}>
          <Row gutter={[6, 6]}>
            <Col xs={12}>
              <Text type="secondary" style={{fontWeight: 700, paddingRight: 6}}>{t('form.fields.name')}:</Text>
              <Text type="secondary">{infoUser.name}</Text>
            </Col>
            <Col xs={12}>
              <Text type="secondary" style={{fontWeight: 700, paddingRight: 6}}>{t('form.fields.age')}:</Text>
              <Text type="secondary">{infoUser.age}</Text>
            </Col>
            <Col xs={12}>
              <Text type="secondary" style={{fontWeight: 700, paddingRight: 6}}>{t('form.fields.weightKg')}:</Text>
              <Text type="secondary">{infoUser.weightKg}</Text>
            </Col>
            <Col xs={12}>
              <Text type="secondary" style={{fontWeight: 700, paddingRight: 6}}>{t('form.fields.heightCm')}:</Text>
              <Text type="secondary">{infoUser.heightCm}</Text>
            </Col>
            <Col xs={12}>
              <Text type="secondary" style={{fontWeight: 700, paddingRight: 6}}>{t('form.fields.goalWeightKg')}:</Text>
              <Text type="secondary">{infoUser.goalWeightKg}</Text>
            </Col>
            <Col xs={24}>
              <Text type="secondary" style={{fontWeight: 700, paddingRight: 6}}>{t('form.fields.availableMinutesPerDay')}:</Text>
              <Text type="secondary">{infoUser.availableMinutesPerDay}</Text>
            </Col>
          </Row>
          <div style={{marginTop: 12}}>
            <Text type="secondary" style={{fontWeight: 700}}>{t('report.summary.bmi')}:</Text>
            <Title level={2}>{bmi.toFixed(1)}</Title>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <Text type="secondary" style={{fontWeight: 700}}>{t('report.summary.healthSummary')}</Text>
          <Paragraph style={{ margin: 0 }}>{summary}</Paragraph>
        </Col>
      </Row>
    </Card>
  )
}

export default HealthSummary
