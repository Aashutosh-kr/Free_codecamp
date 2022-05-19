function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log(sum([1], 0)); // 0
console.log(sum([2, 3, 4], 1));  // 2
console.log(sum([2, 3, 4, 5], 3));  // 9