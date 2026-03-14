import { Button, Card, Col, Form, Input, InputNumber, Row, Space, Typography } from 'antd'
import { useAppDispatch } from '../../app/hooks'
import { generateHealthReport } from '../../features/health-thunk'
import type { HealthReportPayload } from '../../features/types'

const { Title, Text } = Typography

const initialValues: HealthReportPayload = {
	name: 'Tuan',
	age: 30,
	weightKg: 75,
	heightCm: 170,
	goalWeightKg: 68,
	availableMinutesPerDay: 45,
}

const numericRules = [{ required: true, message: 'Please enter a value' }]

const UserInputForm = () => {
	const dispatch = useAppDispatch()

	const onFinish = (values: HealthReportPayload) => {
		dispatch(generateHealthReport(values))
	}

	return (
		<Card variant="outlined" size="small" style={{height: '100%'}}>
			<Title level={4}>Tell us about yourself</Title>
			<Text type="secondary">The AI will translate this into a structured health and movement plan.</Text>
			<Form
				layout="vertical"
				onFinish={onFinish}
				initialValues={initialValues}
				requiredMark={false}
				style={{ marginTop: 24 }}
			>
				<Space orientation="vertical" size="large" style={{ width: '100%' }}>
					<Form.Item label="Name" name="name" rules={[{ required: true, message: 'Name is required' }]}>
						<Input placeholder="e.g. Taylor" />
					</Form.Item>
					<Row gutter={12}>
						<Col xs={24} md={8}>
							<Form.Item label="Age" name="age" rules={numericRules}>
								<InputNumber min={16} max={90} style={{ width: '100%' }} />
							</Form.Item>
						</Col>
						<Col xs={24} md={8}>
							<Form.Item label="Weight (kg)" name="weightKg" rules={numericRules}>
								<InputNumber min={30} max={200} style={{ width: '100%' }} />
							</Form.Item>
						</Col>
						<Col xs={24} md={8}>
							<Form.Item label="Height (cm)" name="heightCm" rules={numericRules}>
								<InputNumber min={120} max={240} style={{ width: '100%' }} />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={12}>
						<Col xs={24} md={8}>
							<Form.Item label="Goal Weight (kg)" name="goalWeightKg" rules={numericRules}>
								<InputNumber min={30} max={200} style={{ width: '100%' }} />
							</Form.Item>
						</Col>
						<Col xs={24} md={16}>
							<Form.Item label="Available Exercise Time Per Day (minutes)" name="availableMinutesPerDay" rules={numericRules}>
								<InputNumber min={10} max={240} style={{ width: '100%' }} />
							</Form.Item>
						</Col>
					</Row>
					<Form.Item>
						<Button type="primary" block htmlType="submit" size='large'>
							Generate Health Report
						</Button>
					</Form.Item>
				</Space>
			</Form>
		</Card>
	)
}

export default UserInputForm
