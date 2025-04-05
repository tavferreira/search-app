import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { openLibraryApi } from '@/features/search/api/openLibraryApi'

export const store = configureStore({
  reducer: {
    [openLibraryApi.reducerPath]: openLibraryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(openLibraryApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
