import { createSlice } from '@reduxjs/toolkit'

export const incrementSlice = createSlice({
  name: 'incrementSlice',
  initialState: {
    value: 1,
  },
  reducers: {
    setIncrement: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setIncrement } = incrementSlice.actions
