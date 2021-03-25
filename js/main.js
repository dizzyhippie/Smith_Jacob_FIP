(function(){

"use strict";	
console.log("fired");

// Selecting the Hamburger Menu Icon and the menu that appears	

let hamButton = document.querySelector("#hamburger");
let burgerMenu = document.querySelector("#hamContainer");

//Adding new classes that will activate the hamburger menu

function hamburgerClicked(){
	burgerMenu.classList.toggle ("slide");
	burgerMenu.classList.toggle ("clicked")
}

hamButton.addEventListener("click", hamburger)



})();