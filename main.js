document.addEventListener('DOMContentLoaded', function() {
    let displayValue = "0";
    let firstNumber = "";
    let secondNumber = "";
    let operator = "";
    let calculationJustCompleted = false;
    const MAX_DISPLAY_LENGTH = 18;

    const displayOutput = document.querySelector('#output');

    function updateDisplay(value) {
        if (calculationJustCompleted && !isNaN(value) && value !== ".") {
            resetDisplay();
        }
        if (displayValue === "0" && value !== ".") {
            displayValue = "";
        }
        displayValue += value;
        displayValue = formatDisplay(displayValue);
        displayOutput.textContent = displayValue;
    }

    function formatDisplay(value) {
        if (value.length > MAX_DISPLAY_LENGTH) {
            return parseFloat(displayValue).toExponential(MAX_DISPLAY_LENGTH - 7);
        }
        return value;
    }

    function resetDisplay() {
        displayValue = "";
        calculationJustCompleted = false;
    }

    function clearDisplay() {
        displayValue = "0";
        firstNumber = "";
        secondNumber = "";
        operator = "";
        calculationJustCompleted = false;
        displayOutput.textContent = displayValue;
    }

    function setOperator(op) {
        if (firstNumber === "") {
            firstNumber = displayValue;
            calculationJustCompleted = false;
        } else if (operator !== "") {
            calculate();
        }
        operator = op;
        displayValue = "0";
    }

    function toggleSign() {
        if (displayValue !== '0') {
            displayValue = (parseFloat(displayValue) * -1).toString();
            displayOutput.textContent = displayValue;
        }
    }

    function backspace() {
        if (displayValue.length > 1) {
            displayValue = displayValue.slice(0, -1);
        } else {
            displayValue = '0';
        }
        displayOutput.textContent = displayValue;
    }

    function percent() {
        if (displayValue !== '0') {
            displayValue = (parseFloat(displayValue) / 100).toString();
            if (displayValue.length > MAX_DISPLAY_LENGTH) {
                displayValue = parseFloat(displayValue).toExponential(MAX_DISPLAY_LENGTH - 7);
            }
            displayOutput.textContent = displayValue;
        }
    }

    function calculate() {
        if (firstNumber !== "" && operator !== "" && displayValue !== "") {
            secondNumber = displayValue;
            let result;
            try {
                result = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
                if (!isFinite(result)) {
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
            calculationJustCompleted = true;
        }
    }

    function operate(a, operator, b) {
        switch (operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': 
                if (b === 0) return "Error";
                return a / b;
        }
    }

    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].forEach((className, index) => {
        document.querySelector(`.${className}`).addEventListener('click', () => updateDisplay(index.toString()));
    });

    [
        { op: '+', className: 'add' },
        { op: '-', className: 'subtract' },
        { op: '*', className: 'multiply' },
        { op: '/', className: 'divide' }
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
    document.querySelector('.toggle-sign').addEventListener('click', toggleSign);
    document.querySelector('.backspace').addEventListener('click', backspace);
    document.querySelector('.percent').addEventListener('click', percent);

    const equalsButton = document.querySelector('.equals');
    if (equalsButton) {
        equalsButton.addEventListener('click', () => {
            calculate();
        });
    };

    const numpadKeyMap = {
        'Numpad0': '0',
        'Numpad1': '1',
        'Numpad2': '2',
        'Numpad3': '3',
        'Numpad4': '4',
        'Numpad5': '5',
        'Numpad6': '6',
        'Numpad7': '7',
        'Numpad8': '8',
        'Numpad9': '9',
        'NumpadAdd': '+',
        'NumpadSubtract': '-',
        'NumpadMultiply': '*',
        'NumpadDivide': '/',
        'NumpadDecimal': '.',
        'Enter': '=',
        'NumpadEnter': '='
    };

    window.addEventListener('keydown', function(e) {
        let key = numpadKeyMap[e.code] || e.key;
        console.log(`Key pressed: ${e.key}, Key code: ${e.code}, Mapped key: ${key}`);
        if (numpadKeyMap[e.code]) {
            if (!isNaN(numpadKeyMap[e.code])) {
                updateDisplay(numpadKeyMap[e.code]);
            } else if (numpadKeyMap[e.code] === '.') {
                if(!displayValue.includes('.')) {
                    updateDisplay('.');
                }
            } else {
                const button = document.querySelector(`button[data-key='${key}']`);
                if (button) {
                    button.click();
                }
            }
        } else if (e.key === 'Backspace') {
            backspace();
        } else if (e.key === 'Enter' || e.key === 'NumpadEnter') {
            calculate();
        }
    });
});