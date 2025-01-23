import { configureStore } from '@reduxjs/toolkit'
import { widgetsSlice } from './slices/widgetsSlice/widgetsSlice'

export const store = configureStore({
	reducer: { [widgetsSlice.name]: widgetsSlice.reducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
