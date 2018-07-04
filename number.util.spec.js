const numberUtil = require('./number.util');

describe('vscode jumping with multiple empty lines in file we are stepping into, and sourcemaps are off', ()=> {
    it('should add two numbers', ()=> {
        const subtractedResult = numberUtil.subtractTwoNumbers(3, 1);
    })
})

describe('vs code jumping with a line break and sourcemaps is on', ()=> {
    it('should add two numbers', ()=> {
        const numberUtilSpy = jest.spyOn(numberUtil, 'addTwoNumbers');
        const addedResult = numberUtil.addTwoNumbers(1, 2);
        expect(numberUtilSpy)
        .toHaveBeenCalledTimes(1);
        expect(addedResult).toEqual(3);
        expect(numberUtilSpy).toHaveBeenCalledWith(1,2);
    })
})

describe('vscode stepping into different code when there is a line break in the this file we are stepping in from and sourcemaps are off', ()=> {
    it('should add two numbers', ()=> {
        const subtractedResult = numberUtil.subtractTwoNumbers(3, 1);
    })
})