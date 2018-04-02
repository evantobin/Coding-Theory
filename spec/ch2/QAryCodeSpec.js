var CodingTheory = require('../../');

describe("QAry Codes", function() {

    it("return a QAry Code from an array", function() {
        let codes1 = [[1,1,1,1],[0,0,0,0]];
        let codes2 = [[1,1,1,0],[0,0,0,0],[1,1,1,1]];
        var distance;

        distance = CodingTheory.QAryCode.getQAryCodeFromArray(codes1);
        expect(distance.toString()).toBe("(4,2,4)");

        distance = CodingTheory.QAryCode.getQAryCodeFromArray(codes2);
        expect(distance.toString()).toBe("(4,3,1)");
    });
});
