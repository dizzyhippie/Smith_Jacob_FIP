(function(){

"use strict";
//REMOVE BEFORE SUBMITTING
console.log("js is linked boi");

const hops = document.querySelector('#hops'),
	keg = document.querySelector('#keg'),
	pint = document.querySelector('#pint'),
	hopInfo = document.querySelector('#hopText'),
	kegInfo = document.querySelector('#kegText'),
	pintInfo = document.querySelector('#pintText'),
	num1 = document.querySelector('#num1'),
	num2 = document.querySelector('#num2'),
	num3 = document.querySelector('#num3'),
	step1 = document.querySelector('#step1'),
	step2 = document.querySelector('#step2'),
	step3 = document.querySelector('#step3');

const featureInfo =[
[`In 2018, we started using select homegrown hops from Chilliwack, British Columbia.`],
[`In 1927, Molson helped establish the first ever bottle return program!`],
[`Molson, it’s the name on the label but there’s a lot behind it.`]];

const callouts =[
[`STEP 1 : Buy a 6 Pack.`],
[`STEP 2 : Buy a 2nd 6 Pack.`],
[`STEP 3 : Go to the Lake.`]];

let hamButton = document.querySelector("#hamburger");
let burgerMenu = document.querySelector("#hamContainer");
//Adding new classes that will activate the hamburger menu
function hamburgerClicked(){
	burgerMenu.classList.toggle ("slide");
	hamButton.classList.toggle ("clicked");
}

function hopClick(event){
	hopInfo.textContent = featureInfo[0];
}

function kegClick(event){
	kegInfo.textContent = featureInfo[1];
}

function pintClick(event){
	pintInfo.textContent = featureInfo[2];
}

function stepOne(event){
	step1.textContent = callouts[0];
}

function stepTwo(event){
	step2.textContent = callouts[1];
}

function stepThree(event){
	step3.textContent = callouts[2];
}


//Event Listeners
hamButton.addEventListener("click", hamburgerClicked);
hops.addEventListener("click", hopClick);
keg.addEventListener("click", kegClick);
pint.addEventListener("click", pintClick);
num1.addEventListener("click", stepOne);
num2.addEventListener("click", stepTwo);
num3.addEventListener("click", stepThree);
})();

// In 2018, we started using select homegrown hops from Chilliwack, British Columbia.
// In 1927, Molson helped establish the first ever bottle return program!
// Molson, it’s the name on the label but there’s a lot behind it.