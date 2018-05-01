var linearCode = require('../ch1/LinearCode');

linearCode.fromGeneratorMatrix = function(linearCode, matrix) {
    codes = {};

    //should go through 3 vectors

    //todo: Make this work

    return endcodes;
}

linearCode.LinearCode = function(n,k,d) {
    this.codewordLength = n;
    this.magnitude = k;
    this.distance = d;
}

linearCode.LinearCode.prototype.getInsideCode = function(number) {
    return number%this.magnitude;
}

linearCode.LinearCode.prototype.plus = function(codeArray1, codeArray2) {
    return codeArray1.map((value, index) => {
        return (value + codeArray2[index]) % this.magnitude;
    });
}

linearCode.LinearCode.prototype.scalar = function(vector, scalar) {
    return vector.map((value, index) => {
        return (value * vector[index]) % this.magnitude;
    });
}

module.exports = linearCode;