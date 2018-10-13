var mazeBoundaries;
var mazeStart;
var mazeEnd;
var crossedBoundary = false;

window.onload = function() {

	mazeBoundaries = document.querySelectorAll(".boundary");
	mazeStart = document.getElementById("start");
	mazeEnd = document.getElementById("end");


	for (var i = 0; i < mazeBoundaries.length - 1; i++) {
		mazeBoundaries[i].onmouseover = outOfBounds;
	}

	end.onmouseover = checkForWin;
}



function outOfBounds(){ //question 1 & 2

	for (var i = 0; i < mazeBoundaries.length - 1; i++){

			mazeBoundaries[i].classList.add("youlose");
	}

	crossedBoundary = true;
}

function checkForWin(){

	if (crossedBoundary == false){

		alert("You win!");
	}
}










