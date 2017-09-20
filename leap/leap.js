
var Year = function(input) {
this.isLeap = function() {
return (input % 100 === 0) ? (input % 400 === 0) : (input % 4 === 0);
};
};


Year.prototype.isLeap = function(ui) {
    
};

module.exports = Year;
