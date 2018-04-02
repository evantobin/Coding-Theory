function distance(a, b) {
    if (a.length != b.length) {
        throw new Error("Cannot calculate distance between codes of unequal length.");
    }
    let distance = 0;
    
    for (var i=0; i<a.length; i++) {
        if (a[i] != b[i]){
            distance++;
        }
    }
    return distance;
}

function minDistance(codesArray) {
    if (!(codesArray instanceof Array)) {
        throw new Error("Provided code must be an Array.");
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
    return {detect: distance-1, correct: Math.floor((distance-1)/2)}
}

function nearestNeighbour(transmittedCode, codesArray) {
    if (!(codesArray instanceof Array)) {
        throw new Error("Provided code must be an Array.");
    }
    var distanceScoped = distance;

    var minDistance = -1;
    var minWord;

    codesArray.every((codeword) => {
        if (codeword == transmittedCode) {
            minDistance = 0;
            minWord = codeword;
            return;
        }
        var distance = distanceScoped(codeword, transmittedCode);
        if(minDistance == -1 || distance < minDistance) {
            minDistance = distance;
            minWord = codeword;
        }
    });
    return minWord;
}

module.exports = {
    distance: distance,
    minDistance: minDistance,
    countCorrectionDetection: countCorrectionDetection,
    nearestNeighbour: nearestNeighbour
}