import { getRandomInt } from "./getRandomInt";

export function setNewArray(n, setArr) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(getRandomInt(50, 10000));
    }
    setArr(arr);
}
