function addTwoNumbers(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw "Inputs must be numbers";
    }
    return x + y;
}

module.exports = { addTwoNumbers };