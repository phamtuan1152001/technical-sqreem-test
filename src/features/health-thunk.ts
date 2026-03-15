import { createAsyncThunk } from '@reduxjs/toolkit'
import { /* fetchHealthReport, */ generateHealthReport as fetchGenerateHealthReportOptimize } from '../services/llm-service'
import type { HealthReport, HealthReportPayload } from './types'

export const generateHealthReport = createAsyncThunk<
	HealthReport,
	HealthReportPayload,
	{ rejectValue: string }
>('healthReport/generate', async (payload, { rejectWithValue }) => {
	try {
		return await fetchGenerateHealthReportOptimize(payload) // ==> OPTIMIZATION PROMPT
		// return await fetchHealthReport(payload) // ==> NOT OPTIMIZE
		// return rejectWithValue("ERROR WHEN TO FETCH")
	} catch (error) {
		const message = error instanceof Error ? error.message : 'errors.failToFetchLlmService'
		return rejectWithValue(message)
	}
})
