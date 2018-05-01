function BalancedBlockDesign(b,v,r,k,lambda) {
    this.blocks = b;
    this.points = v;
    this.repeatPerPoint = r;
    this.blockSize = k;
    this.pointOccursTogether = lambda;
    this.matrix;
}

//this is VERY computationally expensive and based 100% on luck.
function generateArray(blockDesign) {
    if(isValidBlockDesign(blockDesign) === false) {
        return false;
    }

    var points = [];

    // initalize possible positions of points
    for(var i=0;i<blockDesign.points;i++){
        for(var j=0;j<blockDesign.repeatPerPoint;j++){
            points.push(i);
        }
    }

    var combos = k_combinations(points, 3);
    
    // recurrsive function to choose a block design
    var randomBlockDesign = function(combos, design, num){
        if(num == 0) {
            return design;
        }
        var random = Math.floor(Math.random() * combos.length);
        design.push(combos[random]);
        return randomBlockDesign(combos, design, num-1);
    }

    // randomly check block designs until we get a true one
    while(true) {
        var design = [];
        var answer = randomBlockDesign(combos,design,blockDesign.blocks);
        blockDesign.matrix = answer;
        if(checkMatrix(blockDesign)){
            return answer;
        }
    }
   return false;
}

function containsDuplicates(array){
    for(var i=0;i<array.length;i++){
        for(var j=0;j<array.length;j++){
            if(i != j && array[i] == array[j]){
                return true;
            }
        }
    }
    return false;
}

function k_combinations(set, k, checkMatrixFlag, blockDesign) {
	var i, j, combs, head, tailcombs;
	
	// There is no way to take e.g. sets of 5 elements from
	// a set of 4.
	if (k > set.length || k <= 0) {
		return [];
	}
	
	// K-sized set has only one K-sized subset.
	if (k == set.length) {
		return [set];
	}
	
	// There is N 1-sized subsets in a N-sized set.
	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}
	
	// Assert {1 < k < set.length}
	
	// Algorithm description:
	// To get k-combinations of a set, we want to join each element
	// with all (k-1)-combinations of the other elements. The set of
	// these k-sized sets would be the desired result. However, as we
	// represent sets with lists, we need to take duplicates into
	// account. To avoid producing duplicates and also unnecessary
	// computing, we use the following approach: each element i
	// divides the list into three: the preceding elements, the
	// current element i, and the subsequent elements. For the first
	// element, the list of preceding elements is empty. For element i,
	// we compute the (k-1)-computations of the subsequent elements,
	// join each with the element i, and store the joined to the set of
	// computed k-combinations. We do not need to take the preceding
	// elements into account, because they have already been the i:th
	// element so they are already computed and stored. When the length
	// of the subsequent list drops below (k-1), we cannot find any
	// (k-1)-combs, hence the upper limit for the iteration:
	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		// head is a list that includes only our current element.
		head = set.slice(i, i + 1);
		// We take smaller combinations from the subsequent elements
		tailcombs = k_combinations(set.slice(i + 1), k - 1, checkMatrixFlag, blockDesign);
		// For each (k-1)-combination we join it with the current
		// and store it to the set of k-combinations.
		for (j = 0; j < tailcombs.length; j++) {
            var pushed = head.concat(tailcombs[j]);
            if(!containsDuplicates(pushed)) {
                combs.push(pushed);
            }
		}
	}
	return combs;
}

function isValidBlockDesign(blockDesign) {
    // Theorem 2.24
    if(blockDesign.blocks * blockDesign.blockSize != blockDesign.points * blockDesign.repeatPerPoint) {
        return false;
    }

    // Theorem 2.25
    if(blockDesign.pointOccursTogether*(blockDesign.points-1) != blockDesign.repeatPerPoint*(blockDesign.blockSize-1)) {
        return false;
    }

    if(blockDesign.matrix) {
        return checkMatrix(blockDesign);
    }
    return;
}

function checkMatrix(blockDesign) {
    var matrix = blockDesign.matrix;
    if(matrix.length != blockDesign.blocks) {
        return false;
    }

    var occurances = [];
    var repeatPerPoint = []
    for(var i=0;i<blockDesign.points;i++) {
        repeatPerPoint.push(blockDesign.repeatPerPoint);
        occurances.push([]);
        for(var j=0;j<blockDesign.points;j++) {
            occurances[i][j] = blockDesign.pointOccursTogether;
        }
    }

    //go through each block
    for(var i=0;i<matrix.length;i++) {
        //if the length of a block doesn't equal the blocksize then false
        if(matrix[i].length != blockDesign.blockSize) {
            return false;
        }

        var thisBlock = matrix[i];
        
        //go through elements in the block
        for(var j=0;j<thisBlock.length;j++) {

            repeatPerPoint[thisBlock[j]]--;
            // if a point is used more times then allowed then false
            if(repeatPerPoint<0) {
                return false;
            }

            //go through the other elements in the block and mark that they occur together
            for(var k=0;k<thisBlock.length;k++) {
                if(thisBlock[j] != thisBlock[k]) {
                    occurances[thisBlock[j]][thisBlock[k]]--;
                    //if a point occurs with another point more times than possible then false
                    if(occurances[thisBlock[j]][thisBlock[k]] < 0) {
                        return false;
                    }
                }

            }
        }
    }
    
    return true;
}

module.exports = {
    BalancedBlockDesign: BalancedBlockDesign,
    generateArray: generateArray,
    checkMatrix: checkMatrix
}
