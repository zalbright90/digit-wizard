let firstNumber = " ";
let secondNumber = " ";
let operator = " ";

function operate(firstNumber, operator, secondNumber) {
    switch(operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
    }
    
    function add(a, b) {
        return a + b;
    };
    
    function subtract(a, b) {
        return a - b;
    };
    
    function multiply(a, b) {
        return a * b;
    };
    
    function divide(a, b) {
        if (b === 0) {
            return "By the ancient laws, no division by void";
        }
        return a / b;
    }
}