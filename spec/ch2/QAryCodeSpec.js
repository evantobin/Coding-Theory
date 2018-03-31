var CodingTheory = require('../../');

describe("QAry Codes", function() {

    it("return a QAry Code from an array", function() {
        let codes1 = ["1111","0000"];
        let codes2 = ["1110","0000","1111"];
        var distance;

        distance = CodingTheory.QAryCode.getQAryCodeFromArray(codes1);
        expect(distance.toString()).toBe("(4,2,4)");

        distance = CodingTheory.QAryCode.getQAryCodeFromArray(codes2);
        expect(distance.toString()).toBe("(4,3,1)");
    });
});
