// grab DOM elements
const num1 = parseInt(document.getElementById('x1'));
const num2 = parseInt(document.getElementById('y1'));
const addButton = document.getElementById('add');
const additionDisplay = parseInt(document.getElementById('solutionAdd'));

// set event listeners to update state and DOM

addButton.addEventListener('click', () => {
    parseInt(additionDisplay.textContent) = num1.value + num2.value;
    num1 = '';
    num2 = '';
});




