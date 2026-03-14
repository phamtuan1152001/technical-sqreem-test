import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchHealthReport } from '../services/llm-service'
import type { HealthReport, HealthReportPayload } from './types'

export const generateHealthReport = createAsyncThunk<
	HealthReport,
	HealthReportPayload,
	{ rejectValue: string }
>('healthReport/generate', async (payload, { rejectWithValue }) => {
	try {
		return await fetchHealthReport(payload)
	} catch (error) {
		const message = error instanceof Error ? error.message : 'errors.failToFetchLlmService'
		return rejectWithValue(message)
	}
})
