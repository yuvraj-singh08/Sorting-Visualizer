import react from "react";
import { useState, useEffect } from 'react';

import SortingVisualizer from "./components/SortingVisualizer";
import Navbar from "./components/Navbar/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { setSize, swapElements } from "./features/array/arraySlice";
import bubbleSort from "./functions/bubbleSort";

function App() {
  // const [arr, setArr] = useState([]);
  // const [activeAlgo, setActiveAlgo] = useState(null);
  // const [arrSize, setArrSize] = useState(25);
  const arr = useSelector((state) => state.array.arr)
  const n = arr.length;
  const dispatch = useDispatch();

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    dispatch(setSize(7))
  }, [])

  async function bubbleWrapper(arr) {
    const animation = await bubbleSort(arr);
    console.log(animation)
    for (let i = 0; i < animation.length; i++) {
      setTimeout(() => {
        const { a, b } = animation[i]
        dispatch(swapElements({ index1: a, index2: b }))
      }, (100 * i + 1))
    }
  }

  return (
    <>
      <Navbar />
      <SortingVisualizer></SortingVisualizer>
      <button onClick={() => { bubbleWrapper(arr) }}>Swap</button>
    </>
  );
}

export default App;
