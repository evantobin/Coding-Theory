var CodingTheory = require('../../');

describe("Linear Codes", function() {

    it("calculate hamming distance correctly", function() {
        let a = [1,1,1,1]; 
        let b = [0,0,0,0];
        let c = [1,1,1,1];
        var distance;

        distance = CodingTheory.LinearCode.distance(a,b);
        expect(distance).toBe(4);

        distance = CodingTheory.LinearCode.distance(a,c);
        expect(distance).toBe(0);
    });

    it("die when calculating hamming distance of codes of unequal length", function() {
        expect(() => { 
            CodingTheory.LinearCode.distance("1","");
        }).toThrow();
    });

    it("calculates min distance correctly", function() {
        let codes1 = [[1,1,1,1],[0,0,0,0]];
        let codes2 = [[1,1,1,0],[0,0,0,0],[1,1,1,1]];
        var distance;

        distance = CodingTheory.LinearCode.minDistance(codes1);
        expect(distance).toBe(4);
        
        distance = CodingTheory.LinearCode.minDistance(codes2);
        expect(distance).toBe(1);
    });

    it("calculates error detection of a code correctly", function() {
        let codes1 = [[1,1,1,1],[0,0,0,0]];
        let codes2 = [[0,0,0],[0,1,1],[1,0,1],[1,1,0]];
        var errorHandling;

        errorHandling = CodingTheory.LinearCode.countCorrectionDetection(codes1);
        expect(3, errorHandling.detect).toBe(3);
        
        errorHandling = CodingTheory.LinearCode.countCorrectionDetection(codes2);
        expect(1, errorHandling.detect).toBe(1);
    });

    it("calculates error correction of a code correctly", function() {
        let codes1 = [[1,1,1,1],[0,0,0,0]];
        let codes2 = [[0,0,0],[0,1,1],[1,0,1],[1,1,0]];
        var errorHandling;

        errorHandling = CodingTheory.LinearCode.countCorrectionDetection(codes1);
        expect(errorHandling.correct).toBe(1);
        
        errorHandling = CodingTheory.LinearCode.countCorrectionDetection(codes2);
        expect(errorHandling.correct).toBe(0);
    });


    it("can correct one bit error with nearest neighbor", function() {
        let codes1 = [[1,1,1,1],[0,0,0,0]];
        let codes2 = [['b','b','b','b'],['a','a','a','a'],['c','c','c','c']];
        var errorHandling;

        errorHandling = CodingTheory.LinearCode.nearestNeighbour([0,1,1,1], codes1);
        expect(errorHandling).toEqual([1,1,1,1]);

        errorHandling = CodingTheory.LinearCode.nearestNeighbour(['a','b','b','b'], codes2);
        expect(errorHandling).toEqual(['b','b','b','b']);
    });

    it("can correct two bit error with nearest neighbor", function() {
        let codes1 = [[1,0,1,0,1],[0,1,0,1,0]];
        var errorHandling;

        errorHandling = CodingTheory.LinearCode.nearestNeighbour([0,1,1,0,1], codes1);
        expect(errorHandling).toEqual([1,0,1,0,1]);
    });
  });