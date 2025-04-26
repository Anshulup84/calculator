const resultElement = document.getElementById('result')
const clearBtn = document.getElementById('clear-button')
const deleteBtn = document.getElementById('delete-button')
const divideBtn = document.getElementById('divide-button')
const multiplyBtn = document.getElementById('multiply-button')
const subtractBtn = document.getElementById('subtract-button')
const addBtn = document.getElementById('add-button')
const decimalBtn = document.getElementById('decimal-button')
const equalBtn = document.getElementById('equal-button')
const numberBtns = document.querySelectorAll('.number')

// Initialise the variables
let result = '';
let operation = ''
let previousOperand = 0

// function to append Number
const appendNumber = (number) => {
    if(number === '.' && result.includes('.')) return
    result += number
    updateDisplay();
    
}

// function to update display
const updateDisplay = () => {
    if(operation) {
        resultElement.innerText = `${previousOperand} ${operation} ${result}`
    }
    else{

        resultElement.innerText = result
    }
}

// Function to select operator
const selectOperator = (operatorValue) => {
    if(result === '') return;

    if(operation !== '' && previousOperand !== ''){
        calculateResult();
    }

    operation = operatorValue
    previousOperand = result
    result = ''
    updateDisplay()
}

// function to calculate result
const calculateResult = () => {

}

// Add event listener to number buttons
numberBtns.forEach(button =>  {
    button.addEventListener('click', () => {
        appendNumber(button.innerText)
    })
})

decimalBtn.addEventListener('click', () => appendNumber('.'))
addBtn.addEventListener('click', () => selectOperator('+'))
subtractBtn.addEventListener('click', () => selectOperator('-'))
multiplyBtn.addEventListener('click', () => selectOperator('*'))
divideBtn.addEventListener('click', () => selectOperator('/'))

