import { swapElements } from "../features/array/arraySlice";

async function bubbleSort(arr) {
    const n = arr.length
    const animation = []
    const copyArr = arr.slice()
    console.log("Initial Array");
    console.log(arr);

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (copyArr[j] > copyArr[j + 1]) {
                animation.push({ a: j, b: j + 1 })
                const temp = copyArr[j]
                copyArr[j] = copyArr[j + 1]
                copyArr[j + 1] = temp
            }
        }
    }
    return animation
}

export default async function bubbleWrapper(arr, dispatch) {
    const animation = await bubbleSort(arr);
    console.log(animation)
    let n = arr.length
    for (let i = 0; i < animation.length; i++) {
      setTimeout(() => {
        const { a, b } = animation[i]
        dispatch(swapElements({ index1: a, index2: b }))
      }, ((1000 / n) * i + 1))
    }
  }
