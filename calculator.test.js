// calculator.test.js

// Import the calculate function
const calculate = require('./calculator');

// Test suite for addition
describe('Addition Operations', () => {
    test('adds two positive numbers correctly', () => {
        expect(calculate(5, 3, 'add')).toBe(8);
    });

    test('adds negative numbers correctly', () => {
        expect(calculate(-5, -3, 'add')).toBe(-8);
    });

    test('adds zero correctly', () => {
        expect(calculate(5, 0, 'add')).toBe(5);
    });
});

// Test suite for subtraction
describe('Subtraction Operations', () => {
    test('subtracts two positive numbers correctly', () => {
        expect(calculate(5, 3, 'subtract')).toBe(2);
    });

    test('subtracts negative numbers correctly', () => {
        expect(calculate(-5, -3, 'subtract')).toBe(-2);
    });

    test('subtracts zero correctly', () => {
        expect(calculate(5, 0, 'subtract')).toBe(5);
    });
});

// Test suite for multiplication
describe('Multiplication Operations', () => {
    test('multiplies two positive numbers correctly', () => {
        expect(calculate(5, 3, 'multiply')).toBe(15);
    });

    test('multiplies negative numbers correctly', () => {
        expect(calculate(-5, 3, 'multiply')).toBe(-15);
    });

    test('multiplies by zero correctly', () => {
        expect(calculate(5, 0, 'multiply')).toBe(0);
    });
});

// Test suite for division
describe('Division Operations', () => {
    test('divides two positive numbers correctly', () => {
        expect(calculate(6, 2, 'divide')).toBe(3);
    });

    test('handles division by zero', () => {
        expect(calculate(5, 0, 'divide')).toBe("Error: Division by zero is not allowed.");
    });

    test('divides negative numbers correctly', () => {
        expect(calculate(-6, 2, 'divide')).toBe(-3);
    });
});

// Test suite for input validation
describe('Input Validation', () => {
    test('handles non-numeric input', () => {
        expect(calculate('5', 3, 'add')).toBe("Invalid input: both arguments must be numbers.");
        expect(calculate(5, '3', 'add')).toBe("Invalid input: both arguments must be numbers.");
    });

    test('handles invalid operation', () => {
        expect(calculate(5, 3, 'invalid')).toBe("Unknown operation. Please use 'add', 'subtract', 'multiply', or 'divide'.");
    });
});
