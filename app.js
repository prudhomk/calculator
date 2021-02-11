// grab DOM elements
const x = document.getElementById('first-input');
const y = document.getElementById('second-input');
const solutionDisplay = document.getElementById('solution');

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys')

// set event listeners to update state and DOM

changeButton.addEventListener('click', () => {
	const solution = x.value + y.value;
	solutionDisplay.text = sum;

});