import { ArrowUpOutlined } from '@ant-design/icons'
import { Button, Col, Grid, Layout, Row, Select, Space, Typography } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '../app/hooks'
import UserInputForm from '../components/forms/user-input-form'
import { resetHealthReport } from '../features/health-slice'
import ReportPage from './report-page'

const { Content } = Layout
const { Title, Paragraph } = Typography

const HomePage = () => {
	const { t, i18n } = useTranslation()
	const dispatch = useAppDispatch()
	const { lg, md, sm, xl, xs, xxxl } = Grid.useBreakpoint()
	const isMobile = useMemo(() => xs, [xs])
	const isTablet = useMemo(() => md && sm, [md, sm])
	const isDesktop = useMemo(() => lg && md && sm && xl && xxxl, [lg, md, sm, xl, xxxl])
	const [showScrollTop, setShowScrollTop] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 300)
		}

		handleScroll()
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleChangeLanguage = async (language: string) => {
		dispatch(resetHealthReport())
		await i18n.changeLanguage(language)
	}

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<Layout
			style={{
				height: isDesktop
					? '100vh'
					: isMobile || isTablet
						? '100%'
						: 'auto',
				background: '#f4f6fa',
			}}
		>
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
				<Row
					key={i18n.resolvedLanguage ?? 'vi'}
					gutter={[24, 24]}
					style={{ flex: 1 }}
				>
					<Col xs={24} xl={8} style={{ display: 'flex', height: 'fit-content' }}>
						<UserInputForm />
					</Col>
					<Col xs={24} xl={16} style={{ display: 'flex', height: '100%' }}>
						<ReportPage />
					</Col>
				</Row>
			</Content>

			{showScrollTop && (
				<Button
					type="primary"
					shape="circle"
					icon={<ArrowUpOutlined />}
					onClick={handleScrollToTop}
					style={{
						position: 'fixed',
						right: 24,
						bottom: 24,
						zIndex: 1000,
					}}
				/>
			)}
		</Layout>
	)
}

export default HomePage
