const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("EVEN NUMBERS:");
arr.forEach(num => {
    if (num % 2 === 0) {
        console.log(num);
    }
});

console.log("ODD NUMBERS:");
arr.forEach(num => {
    if (num % 2 !== 0) {
        console.log(num);
    }
});

