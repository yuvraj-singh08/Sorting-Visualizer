import { useState, useEffect } from 'react'
import { getRandomInt } from '../functions/getRandomInt';
import './SortingVisualizer.css';
import { setNewArray } from '../functions/setNewArray';

function SortingVisualizer({arrSize, activeAlgo, arr }) {

    useEffect(() => {
        
    }, [arr,arrSize])

    return (
        <div className='container'>
            {arr.map((num, index) => (
                <div key={index} className='bar' style={{ height: `${num * 0.01}%` }}>

                </div>
            ))}
        </div>
    );
}

export default SortingVisualizer;