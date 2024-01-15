import { useEffect } from 'react'
import './SortingVisualizer.css';
import { useSelector } from 'react-redux';

function SortingVisualizer() {
    const arr = useSelector((state) => state.array.arr)
    useEffect(() => {

    }, [arr])

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