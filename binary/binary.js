var Binary = function(input){
    this.input = input;
    this.toDecimal = function(){
    	if(input.match(/^[01]*$/)){
    		return parseInt(input, 2);
    	}else{
    		return 0;
    	}
    };
};

module.exports = Binary;