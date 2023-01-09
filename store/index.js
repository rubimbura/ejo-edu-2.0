import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../service'
import  authReducer  from '../slices/auth'
import participationReducer  from '../slices/participation'


export const store = configureStore({
  reducer: {
    authReducer,
    participationReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)