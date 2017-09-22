var SpaceAge = function (seconds){
	this.seconds = seconds;
};

SpaceAge.prototype.age = function(input){
	    var EarthYear = (this.seconds)/(input * 31557600);
	    return parseFloat(EarthYear.toFixed(2));
};

SpaceAge.prototype.onEarth = function(){
	return this.age(1.000068493);
};
SpaceAge.prototype.onMercury = function(){
	return this.age(0.2408467);
};	
SpaceAge.prototype.onVenus = function(){
	return this.age(0.61519726);
};
SpaceAge.prototype.onMars = function(){
	return this.age(1.8808158);
};
SpaceAge.prototype.onJupiter = function(){
	return this.age(11.862615);
};
SpaceAge.prototype.onSaturn = function(){
	return this.age(29.447498);
};
SpaceAge.prototype.onUranus = function(){
	return this.age(84.016846);
};
SpaceAge.prototype.onNeptune = function(){
	return this.age(164.79132);
};

module.exports = SpaceAge;