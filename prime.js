function isFirstElementPrime(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Input is not a valid non-empty array.";
    }

    const num = arr[0];

    if (typeof num !== 'number' || !Number.isInteger(num)) {
        return "First element is not a valid integer.";
    }

    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(isFirstElementPrime([7, 4, 6]));