let displayValue = "0";
let firstNumber = "";
let secondNumber = "";
let operator = "";
const   MAX_DISPLAY_LENGTH = 18;

const displayOutput = document.querySelector('#output');

function updateDisplay(value) {
    if (displayValue === "0" && value !== ".") {
        displayValue = "";
    }
    displayValue += value;
    if (displayValue.length > MAX_DISPLAY_LENGTH) {
        displayValue = parseFloat(displayValue).toExponential(MAX_DISPLAY_LENGTH - 7);
    }
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
        let result;
        try {
            result = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
            if(!isFinite(result)) {
                throw new Error("Division by zero");
            }
            displayValue = result.toString();
            if (displayValue.length > MAX_DISPLAY_LENGTH) {
                displayValue = parseFloat(display.value).toExponential(MAX_DISPLAY_LENGTH - 7)
            }
        } catch (error) {
            displayValue = error.message === "Division by zero" ? "Nice try, wizard" : "Error";
        }
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
}

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

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.key}']`);
    if (key) key.click();
});