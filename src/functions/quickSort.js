import { swapElements } from "../features/array/arraySlice";

function partition(arr, low, high, animation) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot 
        if (arr[j] < pivot) {
            // Increment index of smaller element 
            i++;
            // Swap elements 
            animation.push({
                index1: i,
                index2: j
            });
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // Swap pivot to its correct position 
    animation.push({
        index1: i + 1,
        index2: high
    });
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1; // Return the partition index 
}

function quickSort(arr, low, high, animation) {
    if (low >= high) return;
    let pi = partition(arr, low, high, animation);

    quickSort(arr, low, pi - 1, animation);
    quickSort(arr, pi + 1, high, animation);
}

export default function quickWrapper(arr, dispatch) {
    let animation = [];
    let copyArr = [...arr];
    let n = arr.length;
    quickSort(copyArr, 0, copyArr.length - 1, animation)
    console.log(animation);
    for (let i = 0; i < animation.length; i++) {
        console.log(animation[i]);
        setTimeout(() => {
            const { index1, index2 } = animation[i]
            dispatch(swapElements({ index1, index2 }))
        }, ((6000 / n) * i + 1))
    }
}