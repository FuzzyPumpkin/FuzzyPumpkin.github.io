//motive tracking
var hungerLvl = 3;
var amusementLvl = 7;
var groomingLvl = 5;
var energyLvl = 2;
//motive button click functions
$("#energyBtn").click(function(){
	if(energyLvl < 10){
		var newLvl = $(".energy")[energyLvl];
		newLvl.classList.add("fulfilled");
		energyLvl++;
		document.getElementById("kitsuneImg").setAttribute("src", "images/sleep.png");
	};
});
$("#amusementBtn").click(function(){
	if(amusementLvl < 10){
		var newLvl = $(".amuse")[amusementLvl];
		newLvl.classList.add("fulfilled");
		amusementLvl++;
		document.getElementById("kitsuneImg").setAttribute("src", "images/play.png");
	};
});
$("#hungerBtn").click(function(){
	if(hungerLvl < 10){
		var newLvl = $(".hunger")[hungerLvl];
		newLvl.classList.add("fulfilled");
		hungerLvl++;
		document.getElementById("kitsuneImg").setAttribute("src", "images/eating.png");
	};
});
$("#groomingBtn").click(function(){
	if(groomingLvl < 10){
		var newLvl = $(".groom")[groomingLvl];
		newLvl.classList.add("fulfilled");
		groomingLvl++;
		document.getElementById("kitsuneImg").setAttribute("src", "images/brush.png");
	};
});
