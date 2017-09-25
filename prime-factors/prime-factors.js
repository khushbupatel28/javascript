exports.for = function(input){
		var primeArray = [];
		if(input === 1){
			return [];
		}
    
		for (var possibleFactors = 2; possibleFactors <= input; ++possibleFactors) {
      if ((input % possibleFactors) === 0) {
        primeArray.push(possibleFactors);
      
        input /= possibleFactors;
        possibleFactors = 1;
      }
    }
  
  return primeArray;
};

//module.exports = primeFactors;


