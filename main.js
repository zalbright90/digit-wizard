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

function operate(a, operator, b) {
    switch(operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return (a * b);
        case '/': return (a / b);
    }
};