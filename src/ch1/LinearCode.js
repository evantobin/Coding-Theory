function distance(a, b) {
    if (a.length != b.length) {
        throw new Exception("Cannot calculate distance between codes of unequal length.");
    }
    let distance = 0;
    
    for (var i=0; i<a.length; i++) {
        if (a.charAt(i) != b.charAt(i)){
            distance++;
        }
    }
    return distance;
}

function minDistance(codesArray) {
    if (!(codesArray instanceof Array)) {
        throw new Exception("Provided code must be an Array.");
    }
    var distanceScoped = distance;

    var minDistance = -1;

    codesArray.forEach((codeword1) => {
        codesArray.forEach((codeword2) => {
            if (codeword1 == codeword2) {
                return;
            }
            var distance = distanceScoped(codeword1, codeword2);
            if(minDistance == -1 || distance < minDistance) {
                minDistance = distance;
            }
        });
    });
    return minDistance;
}

function countCorrectionDetection(codesArray) {
    let distance = minDistance(codesArray);
    return {detect: minDistance-1, correct: ((minDistance-1)/2)}
}

module.exports = {
    distance: distance,
    minDistance: minDistance,
    countCorrectionDetection: countCorrectionDetection
}