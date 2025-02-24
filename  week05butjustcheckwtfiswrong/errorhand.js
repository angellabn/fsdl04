function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    } catch (error) {
        document.getElementById("errorResult").innerText = `Error: ${error.message}`;
    }
}

// Testing the function
divideNumbers(10, 2); // Should return 5
divideNumbers(10, 0); // Should trigger error: Division by zero is not allowed
