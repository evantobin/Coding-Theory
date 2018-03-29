import TestCase from 'js-unit/core/TestCase';

var CodingTheory = require('../');
 
export default class LinearCodeTest extends TestCase {
 
    /** @test */
    hamming_distance_calculates_distance() {
        let a = "1111";
        let b = "0000";
        let c = "1111";
        var distance;

        distance = CodingTheory.LinearCode.distance(a,b);
        this.assertEquals(4, distance);

        distance = CodingTheory.LinearCode.distance(a,c);
        this.assertEquals(0, distance);
    }

    /** @test */
    hamming_distance_dies_on_uneven() {
        var error;
        
        try {
            CodingTheory.LinearCode.distance("1","");
        } catch (e) {
            error = e;
        }

        this.assertNotEquals(null, error)
    }

    /** @test */
    min_distance_calculate_minimum_distance() {
        let codes1 = ["1111","0000"];
        let codes2 = ["1110","0000","1111"];
        var distance;

        distance = CodingTheory.LinearCode.minDistance(codes1);
        this.assertEquals(4, distance);
        
        distance = CodingTheory.LinearCode.minDistance(codes2);
        this.assertEquals(1, distance);
    }

    correct_error_detection_calulated() {
        let codes1 = ["1111","0000"];
        let codes2 = ["000","011","101","110"];
        var errorHandling;

        errorHandling = CodingTheory.LinearCode.countCorrectionDetection(codes1);
        this.assertEquals(3, errorHandling.detect);
        
        errorHandling = CodingTheory.LinearCode.countCorrectionDetection(codes2);
        this.assertEquals(1, errorHandling.detect);
    }
}