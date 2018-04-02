var CodingTheory = require('../../');

describe("Balanced Block Design", function() {

    it("valid block design generates matrix correctly", function() {
        var blockDesign;
        blockDesign = new CodingTheory.BalancedBlockDesign.BalancedBlockDesign(7,7,3,3,1);
  
        expect(CodingTheory.BalancedBlockDesign.generateArray(blockDesign)).toBeTruthy();
    });

    it("invalid block design does not generate matrix correctly", function() {
        var blockDesign;
        blockDesign = new CodingTheory.BalancedBlockDesign.BalancedBlockDesign(0,7,3,3,1);
  
        expect(CodingTheory.BalancedBlockDesign.generateArray(blockDesign)).toBeFalsy();
    });

    it("checks correctly", function() {
        var blockDesign;
        blockDesign = new CodingTheory.BalancedBlockDesign.BalancedBlockDesign(7,7,3,3,1);
        blockDesign.matrix = [[0,1,3],[1,2,4],[2,3,5],[3,4,6],[4,5,0],[5,6,1],[6,0,2]];
        expect(CodingTheory.BalancedBlockDesign.checkMatrix(blockDesign)).toBeTruthy();
    });

});
