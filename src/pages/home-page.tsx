import { Col, Layout, Row, Space, Typography } from 'antd'
import UserInputForm from '../components/forms/user-input-form'
import ReportPage from './report-page'

const { Content } = Layout
const { Title, Paragraph } = Typography

const HomePage = () => (
  <Layout style={{ height: '100vh', background: '#f4f6fa' }}>
    <Content
      style={{
        padding: '24px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Space orientation="vertical" size="middle" style={{ width: '100%', marginBottom: 16 }}>
        <Title level={2} style={{ marginBottom: 0 }}>
          AI-powered Health Insights
        </Title>
        <Paragraph type="secondary">
          Share your current stats and the AI coach will build a weekly exercise calendar, macros, and a clear body composition path.
        </Paragraph>
      </Space>
      <Row gutter={[24, 24]} style={{ flex: 1, minHeight: 0 }}>
        <Col xs={24} xl={8} style={{ display: 'flex', minHeight: 0, height: '100%' }}>
          <UserInputForm />
        </Col>
        <Col xs={24} xl={16} style={{ display: 'flex', minHeight: 0, height: '100%' }}>
          <ReportPage />
        </Col>
      </Row>
    </Content>
  </Layout>
)

export default HomePage
