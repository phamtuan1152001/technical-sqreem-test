import { Table, Typography } from 'antd'
import type { WeeklyExercisePlanItem } from '../../features/types'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { translateDay } from '../../i18n/helpers'

const { Title } = Typography

interface ExerciseCalenderTableProps {
    weeklyExercisePlan: WeeklyExercisePlanItem[]
}

const ExerciseCalenderTable = ({ weeklyExercisePlan }: ExerciseCalenderTableProps) => {
    const { t } = useTranslation()
    const columns = [
        {
            title: t('report.table.columns.day'),
            dataIndex: 'day',
            key: 'day',
            render: (value: string) => translateDay(t, value),
        },
        { title: t('report.table.columns.exercise'), dataIndex: 'exercise', key: 'exercise' },
        {
            title: t('report.table.columns.duration'),
            dataIndex: 'durationMinutes',
            key: 'durationMinutes',
            align: 'right' as const,
            render: (value: number) => t('report.table.units.minutes', { value }),
        },
        {
            title: t('report.table.columns.calories'),
            dataIndex: 'caloriesBurned',
            key: 'caloriesBurned',
            align: 'right' as const,
            render: (value: number) => t('report.table.units.calories', { value }),
        },
    ]
    console.log("ExerciseCalenderTable___data", weeklyExercisePlan)
    return (
        <React.Fragment>
            <Title level={5}>{t('report.table.title')}</Title>
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
