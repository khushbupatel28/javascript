var Matrix = function(input){
    this.rows = function(){
        var row = [];
        for(var i=0; i<input.length; i++){
  	        row.push(input[row][i]);
        }
        return row;
    };
};

module.exports = Matrix;
