// calculator.js

function calculate(num1, num2, operation) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Invalid input: both arguments must be numbers.";
    }
    
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return num1 / num2;
        default:
            return "Unknown operation. Please use 'add', 'subtract', 'multiply', or 'divide'.";
    }
}

// Export the calculate function
module.exports = calculate;
