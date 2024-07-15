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

function calculate () {
    if (firstNumber !== "" && operator !== "" && displayValue !== "") {
        secondNumber = displayValue;
        const result = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
        displayValue = result.toString();
        displayOutput.textContent = displayValue;
        firstNumber = displayValue;
        secondNumber = "";
        operator = "";
    } 
}

function operate(a, operator, b) {
    switch(operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return (a * b);
        case '/': 
            if (b === 0) return "Error";
            return (a / b);
    }
};

['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].forEach((className, index) => {
    document.querySelector(`.${className}`).addEventListener('click', () => updateDisplay(index.toString()));
});

[
    { op: '+', className: 'add' },
    { op: '-', className: 'subtract' },
    { op: '*', className: 'multiply' },
    { op: '/', className: 'divide'}
].forEach(({ op, className }) => {
    const operatorChoice = document.querySelector(`.${className}`);
      operatorChoice.addEventListener('click', () => setOperator(op));
  });

const dotButton = document.querySelector('.dot')
    dotButton.addEventListener('click', () => {
    if (!displayValue.includes('.')) {
        updateDisplay('.');
    }
});

document.querySelector('.clear').addEventListener('click', clearDisplay);

const equalsButton = document.querySelector('.equals');
if (equalsButton) {
    equalsButton.addEventListener('click', () => {
        calculate();
    });
};