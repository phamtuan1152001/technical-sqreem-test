import { Table, Typography } from 'antd'
import type { WeeklyExercisePlanItem } from '../../features/types'
import React from 'react'

const { Title } = Typography

interface ExerciseCalenderTableProps {
    weeklyExercisePlan: WeeklyExercisePlanItem[]
}

const columns = [
    { title: 'Day', dataIndex: 'day', key: 'day' },
    { title: 'Exercise', dataIndex: 'exercise', key: 'exercise' },
    {
        title: 'Duration (min)',
        dataIndex: 'durationMinutes',
        key: 'durationMinutes',
        align: 'right' as const,
        render: (value: number) => `${value} min`,
    },
    {
        title: 'Calories Burned',
        dataIndex: 'caloriesBurned',
        key: 'caloriesBurned',
        align: 'right' as const,
        render: (value: number) => `${value} kcal`,
    },
]

const ExerciseCalenderTable = ({ weeklyExercisePlan }: ExerciseCalenderTableProps) => {
    return (
        <React.Fragment>
            <Title level={5}>Exercise Calendar</Title>
            <Table
                size="small"
                rowKey="day"
                columns={columns}
                dataSource={weeklyExercisePlan}
                pagination={false}
                bordered
            />
        </React.Fragment>
    )
}

export default ExerciseCalenderTable
