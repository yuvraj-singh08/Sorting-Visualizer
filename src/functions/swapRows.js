export function swapRows(arr, index1, index2) {
    // Create a shallow copy of the array
    const newArray = [...arr];
  
    // Perform the swap
    const temp = newArray[index1];
    newArray[index1] = newArray[index2];
    newArray[index2] = temp;
  
    // Return the new array with swapped values
    return newArray;
  }