function findMostFrequent(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Invalid or empty array.";
    }

    const frequencyMap = {};
    let maxCount = 0;
    let mostFrequentItem;

    for (let item of arr) {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;

        if (frequencyMap[item] > maxCount) {
            maxCount = frequencyMap[item];
            mostFrequentItem = item;
        }
    }

    return {
        item: mostFrequentItem,
        count: maxCount
    };
}
const data = [3, "a", "b", "a", "b", "a", 3, 3, 3, 3];