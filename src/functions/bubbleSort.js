import { swapRows } from "./swapRows";

export function bubbleSort(arr, setArr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true
                // then swap them
                const newArr = swapRows(arr, j, j + 1);

                setTimeout(100);
            }
        }
    }

    // Print the sorted array
    console.log(arr);
}