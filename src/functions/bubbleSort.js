export default async function bubbleSort(arr) {
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

