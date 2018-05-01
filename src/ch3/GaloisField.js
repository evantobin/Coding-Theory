function GaloisField(length) {
    if(!isPrime(length)) {
        throw new Error("Not a valid field.");
    }

    this.mod = length;
    this.items = [];
    this.inverses = [];
    for(var i=1;i<length;i++) {
        this.items.push(i);
        this.inverses.push(this.getInverse(i));
    }
}

GaloisField.prototype.getInverse = function(number) {
    for(var i=0;i<this.mod;i++) {
        if((number*i)%this.mod == 1) {
            return i;
        }
    }
}

GaloisField.prototype.getInGroup = function(number) {
    return number%this.mod;
}

GaloisField.prototype.getPrimitives = function() {
    var primitives = [];

    this.items.forEach((item) => {
        var occurances = [];
        var i=0;

        while(occurances.length<this.mod){
            var generated = this.getInGroup(Math.pow(item, i));

            //if there's a repeat, it's not a generator
            if(occurances.includes(generated)) {
                return;
            }

            occurances.push(generated);
            i++;
        }
        primitives.push(items);
    });
    return primitives;
}

const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1;
}

module.exports = {
    GaloisField: GaloisField
}