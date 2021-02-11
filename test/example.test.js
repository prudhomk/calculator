// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, sub, mult, div } from '../utilities.js';

const test = QUnit.test;

test('adds two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 2;
    const y = 2;
    const sum = 4;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
});

test ('subtract two numbers', (expect) => {

    const x = 2;
    const y = 2;
    const sum = 0;
    
    const result = sub(x, y);
    
    expect.equal(result, sum);

});

test ('multiply two numbers', (expect) => {

    const x = 2;
    const y = 2;
    const sum = 4;
    
    const result = mult(x, y);
    
    expect.equal(result, sum);

});

test ('divide two numbers', (expect) => {

    const x = 2;
    const y = 2;
    const sum = 1;
    
    const result = div(x, y);
    
    expect.equal(result, sum);

});