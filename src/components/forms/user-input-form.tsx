import { useMemo } from 'react'
import { Button, Card, Col, Form, Input, InputNumber, Row, Space, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '../../app/hooks'
import { generateHealthReport } from '../../features/health-thunk'
import type { HealthReportPayload } from '../../features/types'
import { useAppSelector } from '../../app/hooks'

const { Title, Text } = Typography

const initialValues: HealthReportPayload = {
	name: 'Tuan',
	age: 30,
	weightKg: 75,
	heightCm: 170,
	goalWeightKg: 68,
	availableMinutesPerDay: 45,
}

const UserInputForm = () => {
	const dispatch = useAppDispatch()
	const { t } = useTranslation()
	const { loading } = useAppSelector((state) => state.healthReport)
	const [form] = Form.useForm<HealthReportPayload>()
	const formValues = Form.useWatch([], form)
	const numericRules = [{ required: true, message: t('form.validation.requiredValue') }]
	const requiredFields: Array<keyof HealthReportPayload> = [
		'name',
		'age',
		'weightKg',
		'heightCm',
		'goalWeightKg',
		'availableMinutesPerDay',
	]

	const isSubmitDisabled = useMemo(() => {
		const hasAnyMissingField = requiredFields.some((field) => {
			const value = formValues?.[field]
			if (typeof value === 'string') {
				return value.trim().length === 0
			}
			return value === undefined || value === null
		})

		const hasAnyValidationError = form.getFieldsError().some(({ errors }) => errors.length > 0)

		return hasAnyMissingField || hasAnyValidationError
	}, [form, formValues])

	const onFinish = (values: HealthReportPayload) => {
		dispatch(generateHealthReport(values))
	}

	return (
		<Card variant="outlined" size="small" style={{height: '100%', width: '100%'}}>
			<Title level={4}>{t('form.title')}</Title>
			<Text type="secondary">{t('form.description')}</Text>
			<Form
				form={form}
				layout="vertical"
				onFinish={onFinish}
				initialValues={initialValues}
				requiredMark={false}
				style={{ marginTop: 24 }}
			>
				<Space orientation="vertical" size="large" style={{ width: '100%' }}>
					<Form.Item label={t('form.fields.name')} name="name" rules={[{ required: true, message: t('form.validation.nameRequired') }]}>
						<Input placeholder={t('form.placeholders.name')} />
					</Form.Item>
					<Row gutter={12}>
						<Col xs={24} md={8}>
							<Form.Item label={t('form.fields.age')} name="age" rules={numericRules}>
								<InputNumber min={16} max={90} style={{ width: '100%' }} />
							</Form.Item>
						</Col>
						<Col xs={24} md={8}>
							<Form.Item label={t('form.fields.weightKg')} name="weightKg" rules={numericRules}>
								<InputNumber min={30} max={200} style={{ width: '100%' }} />
							</Form.Item>
						</Col>
						<Col xs={24} md={8}>
							<Form.Item label={t('form.fields.heightCm')} name="heightCm" rules={numericRules}>
								<InputNumber min={120} max={240} style={{ width: '100%' }} />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={12}>
						<Col xs={24} md={8}>
							<Form.Item label={t('form.fields.goalWeightKg')} name="goalWeightKg" rules={numericRules}>
								<InputNumber min={30} max={200} style={{ width: '100%' }} />
							</Form.Item>
						</Col>
						<Col xs={24} md={16}>
							<Form.Item label={t('form.fields.availableMinutesPerDay')} name="availableMinutesPerDay" rules={numericRules}>
								<InputNumber min={10} max={240} style={{ width: '100%' }} />
							</Form.Item>
						</Col>
					</Row>
					<Form.Item>
						<Button type="primary" block htmlType="submit" size='large' disabled={isSubmitDisabled || loading}>
							{t('form.submit')}
						</Button>
					</Form.Item>
				</Space>
			</Form>
		</Card>
	)
}

export default UserInputForm
