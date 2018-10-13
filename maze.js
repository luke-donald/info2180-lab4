var mazeBoundaries;
var mazeStart;
var mazeEnd;

window.onload = function() {

	mazeBoundaries = document.querySelectorAll(".boundary");
	mazeStart = document.getElementById("start");
	mazeEnd = document.getElementById("end");


	for (var i = 0; i < mazeBoundaries.length - 1; i++) {
		mazeBoundaries[i].onmouseover = outOfBounds;
	}


}



function outOfBounds(){ //question 1 & 2

	for (var i = 0; i < mazeBoundaries.length - 1; i++){

			//mazeBoundaries[i].className += " youlose";
			mazeBoundaries[i].classList.add("youlose");
	}
	
}

