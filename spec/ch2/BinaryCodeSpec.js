var CodingTheory = require('../../');

describe("Binary Codes", function() {

    it("weight of a+b is equal to distance", function() {
        let a = [1,1,1,1];
        let b = [0,0,0,0];
        let c = [1,1,1,1];
        var distance, weightDistance;

        distance = CodingTheory.LinearCode.distance(a,b);
        weightDistance = CodingTheory.BinaryCode.weightDistance(a,b);
        expect(distance).toBe(weightDistance);

        distance = CodingTheory.LinearCode.distance(a,c);
        weightDistance = CodingTheory.BinaryCode.weightDistance(a,c);
        expect(distance).toBe(weightDistance);
    });

    it("weight a + weight b - weight 2(a intersect b) is equal to distance", function() {
        let a = [1,1,1,1];
        let b = [0,0,0,0];
        let c = [1,1,1,1];
        var distance, weightDistance;

        distance = CodingTheory.LinearCode.distance(a,b);
        weightDistance = CodingTheory.BinaryCode.weightIntersection(a,b);
        expect(distance).toBe(weightDistance);

        distance = CodingTheory.LinearCode.distance(a,c);
        weightDistance = CodingTheory.BinaryCode.weightIntersection(a,c);
        expect(distance).toBe(weightDistance);
    });
});
