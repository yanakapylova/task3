import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './features/usersSlice'
import { activeUserReducer } from './features/userSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: activeUserReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch