import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice } from './slices/AuthSlice'
import { BuisnessSlice } from './slices/BuisnessSlice'
import { EmployedSlice } from './slices/EmployedSlice'
import { EventSlice } from './slices/EventSlice'
import { GroupSlice } from './slices/GroupSlice'
import { LoanSlice } from './slices/LoanSlice'
import { ServiceApplicationSlice } from './slices/ServiceApplicationSlice'
import { TscSlice } from './slices/TscSlice'

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    tsc: TscSlice.reducer,
    buisness: BuisnessSlice.reducer,
    employed: EmployedSlice.reducer,
    group: GroupSlice.reducer,
    events: EventSlice.reducer,
    loan: LoanSlice.reducer,
    serviceApplication: ServiceApplicationSlice
  },
})