// Q-1: map vs forEach

const arr = [2, 5, 3, 4, 7];

const mapResult = arr.map((ar) => {
    return ar + 2;
});

const forEachResult = arr.forEach((ar) => {
    return ar + 2;
});

console.log(mapResult, forEachResult);