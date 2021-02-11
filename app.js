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

addButton.addEventListener('click', () => {
    const sum = Number(num1.value) + Number(num2.value);
    console.log(sum);
    additionDisplay.textContent = sum;
    num1 = '';
    num2 = '';
});

//Subtraction

subButton.addEventListener('click', () => {
    const sum2 = Number(num3.value) - Number(num4.value);
    console.log(sum2);
    subtractionDisplay.textContent = sum2;
    num3 = '';
    num4 = '';
});

//Multiplication
multButton.addEventListener('click', () => {
    const sum3 = Number(num5.value) * Number(num6.value);
    console.log(sum3);
    multiplicationDisplay.textContent = sum3;
    num5 = '';
    num6 = '';
});
//Division
divButton.addEventListener('click', () => {
    const sum4 = Number(num7.value) / Number(num8.value);
    console.log(sum4);
    divisionDisplay.textContent = sum4;
    num7 = '';
    num8 = '';
});
