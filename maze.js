var mazeBoundaries;
var mazeStart;
var mazeEnd;
var crossedBoundary = false;
var mazeStatus;

window.onload = function() {

	mazeBoundaries = document.querySelectorAll(".boundary");
	mazeStart = document.getElementById("start");
	mazeEnd = document.getElementById("end");
	mazeStatus = document.getElementById("status");

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
	mazeStatus.textContent = 'You Lose! :( Click the "S" to play again.';
}

function checkForWin(){

	if (crossedBoundary == false){

		mazeStatus.textContent = 'You Win! :) Click the "S" to play again.';
	}
}

function restartMaze(){

	crossedBoundary = false;
	mazeStatus.textContent = 'Move your mouse over the "S" to begin.';

	for (var i = 0; i < mazeBoundaries.length - 1; i++){

			mazeBoundaries[i].classList.remove("youlose");
	}

}












