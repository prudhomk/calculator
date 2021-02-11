const digit1 = document.getElementById('x');
const digit2 = document.getElementById('y');
const solutionDisplay = document.getElementById('solution');



function calculate() {
    var equation = document.getElementById('operator').value;
    document.getElementById('solution');
}

solutionButton.addEventListener('click', () => {
    const solve = Number(digit1.value) + Number(digit2.value);
    console.log(solve);
    solutionDisplay.textContent = solve.value;