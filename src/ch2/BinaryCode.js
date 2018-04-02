function weight(codeArray) {
    var weight = 0;
    for(var i =0;i<codeArray.length;i++){
        if(codeArray[i] == 1) {
            weight++;
        }
    }
    return weight;
}

function plus(codeArray1, codeArray2) {
    return codeArray1.map((value, index) => {
        return (value + codeArray2[index]) % 2;
    });
}

function intersection(codeArray1, codeArray2) {
    return codeArray1.map((value, index) => {
        return value & codeArray2[index];
    });
}

function weightDistance(codeArray1, codeArray2) {
    return weight(plus(codeArray1, codeArray2));
}

function weightIntersection(codeArray1,codeArray2) {
    return weight(codeArray1) + weight(codeArray2) - (2*weight(intersection(codeArray1,codeArray2)));
}

module.exports = {
    weightDistance: weightDistance,
    weightIntersection: weightIntersection,
    weight: weight
}