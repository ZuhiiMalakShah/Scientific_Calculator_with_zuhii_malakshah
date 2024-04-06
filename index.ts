#!/usr/bin/env node

class ScientificCalculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    }

    squareRoot(x: number): number {
        if (x < 0) {
            throw new Error("Square root of a negative number is not real");
        }
        return Math.sqrt(x);
    }

    power(base: number, exponent: number): number {
        return Math.pow(base, exponent);
    }

    sin(degrees: number): number {
        return Math.sin((degrees * Math.PI) / 180);
    }

    cos(degrees: number): number {
        return Math.cos((degrees * Math.PI) / 180);
    }

    tan(degrees: number): number {
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
