// JavaScript program for Merge Sort

import { setIndex } from "../features/array/arraySlice";

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r, animation) {
    console.log("animation" + animation)
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            console.log("k=", k, " i= ", i);
            arr[k] = L[i];
            let temp = {
                position: k,
                value: L[i]
            }
            animation.push(temp);
            i++;
        }
        else {
            arr[k] = R[j];
            let temp = {
                position: k,
                value: R[j]
            }
            animation.push(temp);
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        let temp = {
            position: k,
            value: L[i]
        }
        animation.push(temp);
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        let temp = {
            position: k,
            value: R[j]
        }
        animation.push(temp);
        j++;
        k++;
    }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted
// export default function mergeSort(arr, l, r, animation) {
//     console.log(animation)
//     if (l >= r) {
//         return;
//     }
//     var m = l + parseInt((r - l) / 2);
//     mergeSort(arr, l, m, animation);
//     mergeSort(arr, m + 1, r, animation);
//     merge(arr, l, m, r, animation);
// }

function mergeSort(arr, l, r, animation) {
    console.log(animation);
    if (l < r) {
        var m = Math.floor(l + (r - l) / 2);

        mergeSort(arr, l, m, animation);
        mergeSort(arr, m + 1, r, animation);
        merge(arr, l, m, r, animation);
    }
}

export default async function mergeWrapper(arr, dispatch) {
    let copyArray = [...arr]
    console.log("Copy Array: ", copyArray)
    let animation = [];
    let n = arr.length;
    await mergeSort(copyArray, 0, (n - 1), animation)
    console.log(animation)
    for (let i = 0; i < animation.length; i++) {
        setTimeout(() => {
            dispatch(setIndex({ index: animation[i].position, value: animation[i].value }))
        }, ((4000 / n) * i + 1))
    }
}

// This code is contributed by SoumikMondal
