import { configureStore } from '@reduxjs/toolkit'
import healthReducer from '../features/health-slice'

export const store = configureStore({
	reducer: {
		healthReport: healthReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
