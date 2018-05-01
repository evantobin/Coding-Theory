var CodingTheory = require('../../');

describe("Galois Field", function() {
    it("returns multiplicative inverses on a field (Problem 3.3)", function() {
        var GF7 = new CodingTheory.GaloisField.GaloisField(7);
        expect(GF7.inverses).toEqual([ 1, 4, 5, 2, 3, 6 ]);

        var GF13 = new CodingTheory.GaloisField.GaloisField(13);
        expect(GF13.inverses).toEqual([ 1, 7, 9, 10, 8, 11, 2, 5, 3, 4, 6, 12 ]);
    });

    it("get primitives", function() {
        var GF7 = new CodingTheory.GaloisField.GaloisField(7).getPrimitives();
        console.log(GF7);

    });
});