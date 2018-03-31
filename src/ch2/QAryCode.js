var LinearCode = require("../ch1/LinearCode");

function QAryCode(n, m, d) {
    this.length = n;
    this.magnitude = m;
    this.distance = d;
    this.codeArray;
}

QAryCode.prototype.toString = function toString() {
    return "(" + this.length + "," + this.magnitude + "," + this.distance + ")";
}

function getQAryCodeFromArray(codeWordsArray) {
    var distance = LinearCode.minDistance(codeWordsArray);
    var length = codeWordsArray[0].length;
    var magnitude = codeWordsArray.length;

    var code = new QAryCode(length, magnitude, distance);
    code.codeArray = codeWordsArray;
    return code;
}

module.exports = {
    getQAryCodeFromArray: getQAryCodeFromArray
}