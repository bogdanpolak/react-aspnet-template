import { configureStore } from '@reduxjs/toolkit'
import { incrementSlice } from "./incrementSlice";

export default configureStore({
  reducer: {
    increment: incrementSlice.reducer,
  },
})
