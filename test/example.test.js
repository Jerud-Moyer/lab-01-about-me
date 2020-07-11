// IMPORT MODULES under test here:
// import example from '../example.js';
import { countsAsAYes } from './metalUtils.js';

const test = QUnit.test;

test('it should return true', (expect) => {
    const word = 'yes';
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes(word);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return true', (expect) => {
    const word = 'yup';
    const expected = true;
    const actual = countsAsAYes(word);
    expect.equal(actual, expected);
});

test('it should return false', (expect) => {
    const word = 'no';
    const expected = false;
    const actual = countsAsAYes(word);
    expected.equal(actual, expected);

});
