let displayValue = "0";

const displayOutput = document.querySelector('#output');

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});

function updateDisplay(value) {
    if (displayValue === "0") {
        displayValue = "";
    }
    displayValue += value;
    displayOutput.textContent = displayValue;
}

document.querySelector('.zero').addEventListener('click', () => updateDisplay('0'));

document.querySelector('.one').addEventListener('click', () => updateDisplay('1'));

document.querySelector('.two').addEventListener('click', () => updateDisplay('2'));

document.querySelector('.three').addEventListener('click', () => updateDisplay('3'));

document.querySelector('.four').addEventListener('click', () => updateDisplay('4'));

document.querySelector('.five').addEventListener('click', () => updateDisplay('5'));

document.querySelector('.six').addEventListener('click', () => updateDisplay('6'));


document.querySelector('.seven').addEventListener('click', () => updateDisplay('7'));

document.querySelector('.eight').addEventListener('click', () => updateDisplay('8'));

document.querySelector('.nine').addEventListener('click', () => updateDisplay('9'));

document.querySelector('dot').addEventListener('click', () => {
    if (!displayValue.includes('.')) {
        updateDisplay('.');
    }
});

document.querySelector('.clear').addEventListener('click', () => {
    if (displayValue = "0");
    displayOutput.textContent = "displayValue";
});

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