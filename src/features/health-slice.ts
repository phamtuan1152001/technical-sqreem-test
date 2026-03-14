import { createSlice } from '@reduxjs/toolkit'
import { generateHealthReport } from './health-thunk'
import type { HealthReport } from './types'

interface HealthReportState {
	loading: boolean
	error: string | null
	report: HealthReport | null
}

const initialState: HealthReportState = {
	loading: false,
	error: null,
	report: null,
}

const healthSlice = createSlice({
	name: 'healthReport',
	initialState,
	reducers: {
		resetHealthReport: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(generateHealthReport.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(generateHealthReport.fulfilled, (state, action) => {
				state.loading = false
				state.report = action.payload
			})
			.addCase(generateHealthReport.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload ?? 'errors.unableToLoadReport'
			})
	},
})

export const { resetHealthReport } = healthSlice.actions
export default healthSlice.reducer
