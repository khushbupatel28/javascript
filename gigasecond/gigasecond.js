var Gigasecond = function(Date){
   this.Date = Date;         
};

Gigasecond.prototype.date = function(){
   	var gs = new Date(this.Date.getTime() + 1000000000000);
   	return gs; 
};


module.exports = Gigasecond;