var Bob = function(){

	this.hey = function (input) {
        var string = input.length;
        var str = input.toUpperCase();
        var number = (input.search(/(\d+,?\s?)+[\.!\?]*/) != -1);
        var question = input.trim();
        
           if (input === str && str !== input.toLowerCase()){
              return 'Whoa, chill out!';
           } else if(input.charAt(question.length - 1) === '?'){
           	  return 'Sure.';
           } else if(input.trim().length === 0){
           	  return 'Fine. Be that way!';
           }else if (number){
           	  if(input.charAt(input.length - 1) === '!'){
           	  	return 'Whoa, chill out!';
           	  }else{
           	  	return 'Whatever.';
           	  }
           }else{
           	 return 'Whatever.';
           }
    };
};

    module.exports = Bob;