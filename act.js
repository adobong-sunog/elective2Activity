function square(x, y) {
    return "Square of x :" + (x * x) + ", Square of y :" + (y * y);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let x = 7;
let y = 3;

console.log("Square: " + square(x, y));
console.log("Multiply: " + multiply(x, y));
console.log("Divide: " + divide(x, y));
