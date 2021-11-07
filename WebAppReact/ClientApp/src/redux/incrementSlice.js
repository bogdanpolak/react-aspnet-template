import { createSlice } from '@reduxjs/toolkit'

export const incrementSlice = createSlice({
  name: 'incrementSlice',
  initialState: {
    value: 1,
  },
  reducers: {
    incIncrement: (state) => {
      state.value += 1
    },
    decIncrement: (state) => {
      state.value -= 1
    },
    setIncrement: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setIncrement, incIncrement, decIncrement } = incrementSlice.actions
