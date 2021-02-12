import './example.test.js';

import { add, sub, mult, div } from '../utilities.js';

const test = QUnit.test;

test('adds two numbers', (expect) => {
    
    const x = 2;
    const y = 2;
    const sum = 4;
    const result = add(x, y);

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