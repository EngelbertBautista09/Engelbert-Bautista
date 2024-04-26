/*
    1 Create a function that will return the sum 3 numbers
    2 Create a function that will return the difference of the 2 numbers
    3 Create a function that will return the product of the 2 numbers
    4 Create a function that will return the average of the 2 numbers
*/
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

function difference(num1, num2) {
    return num1 - num2;
}

function product(num1, num2) {
    return num1 * num2;
}

function average(num1, num2) {
    return (num1 + num2) / 2;
}

console.log("Sum:", sum(3, 5, 7));
console.log("Difference:", difference(10, 5));
console.log("Product:", product(4, 6));
console.log("Average:", average(10, 20));
