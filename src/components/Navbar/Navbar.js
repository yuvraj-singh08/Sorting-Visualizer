import react from 'react';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { setAlgo } from '../../features/algo/algoSlice';
import { setSize } from '../../features/array/arraySlice';

function Navbar() {
    const algorithms = [
        {
            index: 0,
            name: 'Bubble Sort'
        },
        {
            index: 1,
            name: 'Merge Sort'
        },
        {
            index: 2,
            name: 'Quick Sort'
        },
        {
            index: 3,
            name: 'Heap Sort'
        }
    ];

    const dispatch = useDispatch();
    const currentAlgo = useSelector((state) => state.algo.currentAlgo);
    const arrSize = useSelector((state) => state.array.size)


    function handleAlgoChange(algoIndex) {
        dispatch(setAlgo(algoIndex));
    }

    function handleSliderChange(e) {
        dispatch(setSize(e.target.value))
    }

    useEffect(() => {
        handleAlgoChange(0);

    }, []);

    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="navbar-brand" href="/">Algorithm Visualizer</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='slider-container nav-item center-item'>
                        <input
                            type="range"
                            min="8"
                            max="200"
                            value={arrSize}
                            onChange={(handleSliderChange)}
                        />
                    </div>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {algorithms.map((data) => (
                            <li
                                key={data.index}
                                className='nav-item'
                            >
                                <button
                                    onClick={() => handleAlgoChange(data.index)}
                                    className={`nav-link ${currentAlgo === data.index ? 'active' : ''
                                        }`}
                                >
                                    {data.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;