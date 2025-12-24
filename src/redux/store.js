import { configureStore } from '@reduxjs/toolkit'
import counterdata from './counterslice'
import cartslice from "./cartslice"

export const store = configureStore({
  reducer: {
    counter: counterdata,
    cart: cartslice,
  },
})