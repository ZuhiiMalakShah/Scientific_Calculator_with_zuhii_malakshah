#!/usr/bin/env node
class ScientificCalculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    }
    squareRoot(x) {
        if (x < 0) {
            throw new Error("Square root of a negative number is not real");
        }
        return Math.sqrt(x);
    }
    power(base, exponent) {
        return Math.pow(base, exponent);
    }
    sin(degrees) {
        return Math.sin((degrees * Math.PI) / 180);
    }
    cos(degrees) {
        return Math.cos((degrees * Math.PI) / 180);
    }
    tan(degrees) {
        return Math.tan((degrees * Math.PI) / 180);
    }
}
// Example usage
const calculator = new ScientificCalculator();
console.log("Addition:", calculator.add(5, 3));
console.log("Subtraction:", calculator.subtract(5, 3));
console.log("Multiplication:", calculator.multiply(5, 3));
console.log("Division:", calculator.divide(5, 3));
console.log("Square Root:", calculator.squareRoot(16));
console.log("Power:", calculator.power(2, 3));
console.log("Sin:", calculator.sin(30));
console.log("Cos:", calculator.cos(60));
console.log("Tan:", calculator.tan(45));
export {};
