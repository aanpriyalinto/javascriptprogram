function sumOfSquares(arr) {
    if (!Array.isArray(arr)) {
        return "Input is not a valid array.";
    }

    let sum = 0;
    for (let num of arr) {
        if (typeof num === 'number') {
            sum += num * num;
        } else {
            return "Array must contain only numbers.";
        }
    }

    return sum;
}
const numbers = [1, 2, 3, 4];