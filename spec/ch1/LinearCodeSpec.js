var CodingTheory = require('../../');

describe("Linear Codes", function() {

    it("calculate hamming distance correctly", function() {
        let a = "1111";
        let b = "0000";
        let c = "1111";
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
        let codes1 = ["1111","0000"];
        let codes2 = ["1110","0000","1111"];
        var distance;

        distance = CodingTheory.LinearCode.minDistance(codes1);
        expect(distance).toBe(4);
        
        distance = CodingTheory.LinearCode.minDistance(codes2);
        expect(distance).toBe(1);
    });

    it("calculates error detection of a code correctly", function() {
        let codes1 = ["1111","0000"];
        let codes2 = ["000","011","101","110"];
        var errorHandling;

        errorHandling = CodingTheory.LinearCode.countCorrectionDetection(codes1);
        expect(3, errorHandling.detect).toBe(3);
        
        errorHandling = CodingTheory.LinearCode.countCorrectionDetection(codes2);
        expect(1, errorHandling.detect).toBe(1);
    });

    it("calculates error correction of a code correctly", function() {
        let codes1 = ["1111","0000"];
        let codes2 = ["000","011","101","110"];
        var errorHandling;

        errorHandling = CodingTheory.LinearCode.countCorrectionDetection(codes1);
        expect(errorHandling.correct).toBe(1);
        
        errorHandling = CodingTheory.LinearCode.countCorrectionDetection(codes2);
        expect(errorHandling.correct).toBe(0);
    });


    it("can correct one bit error with nearest neighbor", function() {
        let codes1 = ["1111","0000"];
        let codes2 = ["bbbb","aaaa","cccc"];
        var errorHandling;

        errorHandling = CodingTheory.LinearCode.nearestNeighbour("0111", codes1);
        expect(errorHandling).toBe("1111");

        errorHandling = CodingTheory.LinearCode.nearestNeighbour("abbb", codes2);
        expect(errorHandling).toBe("bbbb");
    });

    it("can correct two bit error with nearest neighbor", function() {
        let codes1 = ["10101","01010"];
        var errorHandling;

        errorHandling = CodingTheory.LinearCode.nearestNeighbour("01101", codes1);
        expect("10101", errorHandling).toBe("10101");
    });
  });