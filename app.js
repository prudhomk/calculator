import { add, sub, mult, div } from './utilities.js';

function initOperator(firstInputId, secondInputId, buttonId, resultsId, calculation) {
    const num1 = document.getElementById(firstInputId);
    const num2 = document.getElementById(secondInputId);
    const button = document.getElementById(buttonId);
    const display = document.getElementById(resultsId);

    button.addEventListener('click', () => {
        const result = calculation(Number(num1.value), Number(num2.value));
        display.textContent = result;
    
    });
}

initOperator('x1', 'y1', 'add', 'solutionAdd', add);
initOperator('x2', 'y2', 'subtract', 'solutionSub', sub);
initOperator('x3', 'y3', 'multiply', 'solutionMult', mult);
initOperator('x4', 'y4', 'divide', 'solutionDiv', div);