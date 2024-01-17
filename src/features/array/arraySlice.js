// arraySlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getRandomInt } from '../../functions/getRandomInt';

const initialState = {
  arr: [], // Initial array
  size: 0, // Initial size
};

const swapArrayElements = (array, a, b) => {
  const newArr = [...array];
  [newArr[a], newArr[b]] = [newArr[b], newArr[a]];
  return newArr;
};

export const arraySlice = createSlice({
  name: 'arraySlice',
  initialState,
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
      state.arr = Array.from({ length: state.size }, () => getRandomInt(50, 10000));
    },
    setArr: (state, action) => {
      state.arr = action.payload;
    },
    swapElements: (state, action) => {
      const { index1, index2 } = action.payload;
      state.arr = swapArrayElements(state.arr, index1, index2);
    },
  },
});

export const { setSize, swapElements, setArr } = arraySlice.actions;

export default arraySlice.reducer;
