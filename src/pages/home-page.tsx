import { Col, Layout, Row, Space, Typography } from 'antd'
import UserInputForm from '../components/forms/user-input-form'
import ReportPage from './report-page'

const { Content } = Layout
const { Title, Paragraph } = Typography

const HomePage = () => (
  <Layout style={{ minHeight: '100vh', background: '#f4f6fa' }}>
    <Content style={{ padding: '32px 24px 48px' }}>
      <Space orientation="vertical" size="middle" style={{ width: '100%', marginBottom: 16 }}>
        <Title level={2} style={{ marginBottom: 0 }}>
          AI-powered Health Insights
        </Title>
        <Paragraph type="secondary">
          Share your current stats and the AI coach will build a weekly exercise calendar, macros, and a clear body composition path.
        </Paragraph>
      </Space>
      <Row gutter={[24, 24]}>
        <Col xs={24} xl={8}>
          <UserInputForm />
        </Col>
        <Col xs={24} xl={16}>
          <ReportPage />
        </Col>
      </Row>
    </Content>
  </Layout>
)

export default HomePage
