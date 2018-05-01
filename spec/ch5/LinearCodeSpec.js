var CodingTheory = require('../../');

describe("Linear Code CH5", function() {
    it("generates from basis", function() {
        var code = new CodingTheory.LinearCode.LinearCode(3,2,2);
        expect(CodingTheory.LinearCode.fromGeneratorMatrix(code,[[0,1,1],[1,0,1]])).toEqual([ [ 0, 1, 1 ], [ 0, 0, 0 ], [ 1, 1, 0 ], [ 1, 0, 1 ] ]);
    });
});