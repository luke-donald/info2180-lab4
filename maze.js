var mazeBoundaries;
var mazeStart;
var mazeEnd;
var crossedBoundary = false;

window.onload = function() {

	mazeBoundaries = document.querySelectorAll(".boundary");
	mazeStart = document.getElementById("start");
	mazeEnd = document.getElementById("end");

	// Q. 1 & 2
	for (var i = 0; i < mazeBoundaries.length - 1; i++) {
		mazeBoundaries[i].onmouseover = outOfBounds;
	}

	//Q3.
	mazeEnd.onmouseover = checkForWin;

	//Q4.
	mazeStart.onclick = restartMaze;
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

function restartMaze(){

	crossedBoundary = false;

	for (var i = 0; i < mazeBoundaries.length - 1; i++){

			mazeBoundaries[i].classList.remove("youlose");
	}

}












