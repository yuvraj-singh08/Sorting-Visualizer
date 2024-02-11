import react from "react";
import { useState, useEffect } from 'react';

import SortingVisualizer from "./components/SortingVisualizer";
import Navbar from "./components/Navbar/Navbar";



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
