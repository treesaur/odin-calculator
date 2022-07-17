// basic operator functions
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;


function operate (operator, num_1, num_2) {
    switch (operator) {
        case ('add'):
            return add(num_1, num_2);
        case ('subtract'):
            return subtract(num_1, num_2);
        case ('multiply'):
            return multiply(num_1, num_2);
        case ('divide'):
            return divide(num_1, num_2);
    }
}


// button interaction with display
const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('#display');
const result = document.querySelector('#result');

let first_Num;
let second_Num;
let operation;
let new_Result;

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.className === 'btn operator') {
            if (isNaN(first_Num)) {
                first_Num = parseInt(display.textContent); 
                display.textContent = ""; 
                operation = btn.value;
            } else if (!isNaN(first_Num)) {
                if (isNaN(new_Result)) {
                    second_Num = parseInt(display.textContent);
                    new_Result = parseInt(operate(operation, first_Num, second_Num));
                    result.textContent = new_Result; 
                } else if (!isNaN(new_Result)) {
                    second_Num = parseInt(display.textContent);
                    new_Result = parseInt(operate(operation, parseInt(result.textContent), second_Num));
                    result.textContent = new_Result;
                }
                operation = btn.value; 
                display.textContent = ""; 
            }
        } else if (btn.className === 'btn digit') {
            display.textContent += btn.value;
        } else if (btn.className === 'btn equal') {
            second_Num = parseInt(display.textContent);
            if (!first_Num || !second_Num) return
            if (!isNaN(new_Result)) {
                new_Result = parseInt(operate(operation, parseInt(result.textContent), second_Num));
            } else if (isNaN(new_Result)) {
                new_Result = parseInt(operate(operation, first_Num, second_Num));
            }
            display.textContent = new_Result;
            result.textContent = new_Result;
        } else if (btn.className === 'btn clear') {
            clear();
        }
    })
})

function clear() {
    display.textContent = "";
    first_Num = undefined;
    second_Num = undefined;
    operation = undefined;
    new_Result = undefined;
    result.textContent = undefined;
}



