const numberUtil = require('./number.util');

describe('adding two numbers', ()=> {
    it('should add two numbers', ()=> {
        const numberUtilSpy = jest.spyOn(numberUtil, 'addTwoNumbers');
        const result = numberUtil.addTwoNumbers(1, 2);
        expect(numberUtilSpy)
            .toHaveBeenCalledTimes(1);
        expect(result).toEqual(3);
        expect(numberUtilSpy).toHaveBeenCalledWith(1,2);
    })
})