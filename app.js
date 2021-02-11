import { add, sub, mult, div } from './utilities.js';

// Addition

const num1 = document.getElementById('x1');
const num2 = document.getElementById('y1');
const addButton = document.getElementById('add');
const additionDisplay = document.getElementById('solutionAdd');

// Subtraction

const num3 = document.getElementById('x2');
const num4 = document.getElementById('y2');
const subButton = document.getElementById('subtract');
const subtractionDisplay = document.getElementById('solutionSub');

// Multiplication

const num5 = document.getElementById('x3');
const num6 = document.getElementById('y3');
const multButton = document.getElementById('multiply');
const multiplicationDisplay = document.getElementById('solutionMult');

// Division

const num7 = document.getElementById('x4');
const num8 = document.getElementById('y4');
const divButton = document.getElementById('divide');
const divisionDisplay = document.getElementById('solutionDiv');
// set event listeners to update state and DOM

//Addition

addButton.addEventListener('click', () => {
    const sum = add(Number(num1.value), Number(num2.value));
    additionDisplay.textContent = sum;
    
});

//Subtraction

subButton.addEventListener('click', () => {
    const sum = sub(Number(num3.value), Number(num4.value));
    subtractionDisplay.textContent = sum;
    
});

//Multiplication

multButton.addEventListener('click', () => {
    const sum3 = mult(Number(num5.value), Number(num6.value));
    multiplicationDisplay.textContent = sum3;
    
});

//Division

divButton.addEventListener('click', () => {
    const sum4 = div(Number(num7.value), Number(num8.value));
    divisionDisplay.textContent = sum4;
    
});

