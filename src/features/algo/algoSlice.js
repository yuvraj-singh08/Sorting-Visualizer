import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentAlgo: 0
}

export const algoSlice = createSlice({
  name: 'algoSlice',
  initialState,
  reducers: {
    setAlgo: (state, action) => {
      state.currentAlgo = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setAlgo } = algoSlice.actions

export default algoSlice.reducer