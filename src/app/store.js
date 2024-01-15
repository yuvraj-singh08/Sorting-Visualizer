import { configureStore } from '@reduxjs/toolkit'
import algoReducer from '../features/algo/algoSlice'
import arraySlice from '../features/array/arraySlice'

export default configureStore({
  reducer: {
    algo: algoReducer,
    array: arraySlice,
  }
})