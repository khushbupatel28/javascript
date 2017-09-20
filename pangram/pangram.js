var Pangram = function(input){
    var string = "abcdefghijklmnopqrstuvwxyz";
    
    this.isPangram = function () {
        input = input.toLowerCase();
      
        for (var i = 0; i < string.length; i++) {
           if (!input.includes(string[i])) {
              return false;
           }
        }
      return true;
    }
};

module.exports = Pangram;
