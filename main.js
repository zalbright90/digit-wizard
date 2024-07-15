let displayValue = "0";
let firstNumber = "";
let secondNumber = "";
let operator = "";

const displayOutput = document.querySelector('#output');

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});

function updateDisplay(value) {
    if (displayValue === "0" && value !== ".") {
        displayValue = "";
    }
    displayValue += value;
    displayOutput.textContent = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayOutput.textContent = displayValue;
}

function setOperator(op) {
    if (firstNumber === "") {
        firstNumber = displayValue;
    } else if (operator !== "") {
        calculate();
    }
    operator = op;
    displayValue = "0";
}

function operate(a, operator, b) {
    switch(operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return (a * b);
        case '/': return (a / b);
    }
};

['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].forEach((className, index) => {
    document.querySelector(`.${className}`).addEventListener('click', () => updateDisplay(index.toString()));
});

['+', '-', '*', '/'].forEach(op => {
    document.querySelector(`.${op}`).addEventListener('click', () => setOperator(op));
});

document.querySelector('dot').addEventListener('click', () => {
    if (!displayValue.includes('.')) {
        updateDisplay('.');
    }
});

document.querySelector('.clear').addEventListener('click', clearDisplay);
