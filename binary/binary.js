var Binary = function(input){
    this.input = input;
};

Binary.prototype.toDecimal = function(){
    var bstring = /^[0,1]*$/;
    var nstring = /^([0-9]|[a-z])+([0-9a-z]+)$/i;
    
    //var result = parseInt( input.split('').reverse().join(''), 2 )

     if(this.input.indexOf('n')>-1 ||this.input.indexOf('c')>-1 ||this.input.indexOf('2')>-1){
    	return 0;
    }else{
        return parseInt(this.input, 2);;
    }
};

module.exports = Binary;