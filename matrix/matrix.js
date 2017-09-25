var Matrix = function(inputMatrix){
    
    this.rows = inputMatrix.split('\n').map(function(rowelement){
        return rowelement.split(' ').map(function(rowelement){
            return parseInt(rowelement);
        });    
    });

    this.columns = Object.keys(this.rows).map(function(col){                 // keys used to return the properties of the object 
    	return this.map(function(rowelement){return rowelement[col]}); 
    }, this.rows);
};

module.exports = Matrix;
