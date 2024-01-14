export function getRandomInt(min, max) {
    // Ensure that both min and max are integers
    min = Math.ceil(min);
    max = Math.floor(max);

    // Generate a random integer within the specified range
    return Math.floor(Math.random() * (max - min + 1)) + min;// +1 because Math.random() is exclusive of 1 so at max it will be Math.floor(9.999999) which will never be 10
}
