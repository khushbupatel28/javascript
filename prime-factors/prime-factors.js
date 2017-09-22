var primeFactors = function(){

};

	primefactors.prototype.for = function(input){
		var primeArray = [];
		if(input === 1){
			return [];
		}

		for(var )

    

};
module.exports = primeFactors;


for(var i=2;i<=val; i++){
        while(Number.isInteger(val/i)){
            factorArray.push(i);
            val = val/i;
        }      
    }
    return factorArray;


for(i = 2; i < input; i++){
        if(input % 2 === 0){
            for(j=2; j <= (i/2); j++){
            	if( i% j === 0){
            		isprime = false;
            	}else{
            		isprime = true;
            	}
            }
            if(isprime === true){
                input /= i;
                return primeArray[i];
            }
        }
    }	