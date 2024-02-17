import react from "react";
import { useState, useEffect } from 'react';

import SortingVisualizer from "./components/SortingVisualizer";
import Navbar from "./components/Navbar/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { setSize } from "./features/array/arraySlice";
import quickWrapper from "./functions/quickSort";
import mergeWrapper from "./functions/mergeSort";
import bubbleWrapper from "./functions/bubbleSort";

function App() {
  // const [arr, setArr] = useState([]);
  // const [activeAlgo, setActiveAlgo] = useState(null);
  // const [arrSize, setArrSize] = useState(25);
  

  return (
    <>
      <Navbar />
      <SortingVisualizer></SortingVisualizer>
    </>
  );
}

export default App;
