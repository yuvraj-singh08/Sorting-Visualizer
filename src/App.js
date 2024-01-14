import react from "react";
import { useState, useEffect } from 'react';

import SortingVisualizer from "./components/SortingVisualizer";
import Navbar from "./components/Navbar/Navbar";
import { setNewArray } from "./functions/setNewArray";
import { swapRows } from "./functions/swapRows";
// import { bubbleSort } from "./functions/bubbleSort";

function App() {
  const [arr, setArr] = useState([]);
  const [activeAlgo, setActiveAlgo] = useState(null);
  const [arrSize, setArrSize] = useState(25);

  useEffect(() => {
    setNewArray(arrSize, setArr);
  }, [arrSize]);

  async function bubbleSort() {
    for (let i = 0; i < arrSize - 1; i++) {
      for (let j = 0; j < arrSize - i - 1; j++) {
        await new Promise(resolve => setTimeout(resolve, 100));

        if (arr[j] > arr[j + 1]) {
          // Swap the bars and update the state for visualization
          const newArr = swapRows(arr, j, j + 1);
          setArr([...newArr]);
        }
      }
    }
  }

  // function swap() {
  //   bubbleSort(arr, setArr);
  // }

  return (
    <>
      <Navbar arrSize={arrSize} setArrSize={setArrSize} activeAlgo={activeAlgo} setActiveAlgo={setActiveAlgo} />
      <SortingVisualizer setArr = {setArr} arrSize={arrSize} activeAlgo={activeAlgo} arr={arr}></SortingVisualizer>
      <button onClick={bubbleSort}>Swap</button>
    </>
  );
}

export default App;
