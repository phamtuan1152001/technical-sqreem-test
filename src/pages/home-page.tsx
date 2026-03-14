import { Col, Layout, Row, Select, Space, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import UserInputForm from '../components/forms/user-input-form'
import ReportPage from './report-page'
import { useAppDispatch } from '../app/hooks'
import { resetHealthReport } from '../features/health-slice'

const { Content } = Layout
const { Title, Paragraph } = Typography

const HomePage = () => {
	const { t, i18n } = useTranslation()
	const dispatch = useAppDispatch()

	const handleChangeLanguage = async (language: string) => {
		dispatch(resetHealthReport())
		await i18n.changeLanguage(language)
	}

	return (
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
				<Row justify="space-between" align="top" gutter={[12, 12]} style={{ marginBottom: 16 }}>
					<Col flex="auto">
						<Space orientation="vertical" size="middle" style={{ width: '100%' }}>
							<Title level={2} style={{ marginBottom: 0 }}>
								{t('home.title')}
							</Title>
							<Paragraph type="secondary">{t('home.description')}</Paragraph>
						</Space>
					</Col>
					<Col>
						<Space orientation="vertical" size={4}>
							<Typography.Text type="secondary">{t('app.languageLabel')}</Typography.Text>
							<Select
								value={i18n.resolvedLanguage}
								onChange={(value) => void handleChangeLanguage(value)}
								options={[
									{ value: 'vi', label: t('app.languages.vi') },
									{ value: 'en', label: t('app.languages.en') },
								]}
								style={{ minWidth: 120 }}
							/>
						</Space>
					</Col>
				</Row>
				<Row key={i18n.resolvedLanguage ?? 'vi'} gutter={[24, 24]} style={{ flex: 1, minHeight: 0 }}>
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
}

export default HomePage
