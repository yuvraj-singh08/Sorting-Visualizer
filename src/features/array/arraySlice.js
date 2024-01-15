// arraySlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getRandomInt } from '../../functions/getRandomInt';

const initialState = {
  arr: [], // Initial array
  size: 7, // Initial size
};

export const arraySlice = createSlice({
  name: 'arraySlice',
  initialState,
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
      const n = state.size;
      let arr = [];
      for (let i = 0; i < n; i++) {
        arr.push(getRandomInt(50, 10000));
      }
      state.arr = arr;
    }
  },
});

export const { setSize } = arraySlice.actions;

export default arraySlice.reducer;