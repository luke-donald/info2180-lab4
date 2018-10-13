var mazeBoundaries;


window.onload = function() {

	mazeBoundaries = document.querySelectorAll(".boundary");



	for (var i = 0; i < mazeBoundaries.length - 1; i++) {
		mazeBoundaries[i].onmouseover = outOfBounds();
	}


}



function outOfBounds(){ //question 1 & 2

	for (var i = 0; i < mazeBoundaries.length - 1; i++){

			//mazeBoundaries[i].className += " youlose";
			mazeBoundaries[i].classList.add("youlose");
	}
	
}

