
function onclickthisColor(evt) {
	evt.preventDefault();
    alert("My Favorite Color is Black");	
}
function onclickthisPlace(evt) {
	evt.preventDefault();
    alert("My Favorite Color is Black");	
}
function onclickthisRitual(evt) {
	evt.preventDefault();
    alert("My Favorite Ritual is doing Service");	
}


document.querySelector('#color').addEventListener('click', onclickthisColor);
document.querySelector('#place').addEventListener('click', onclickthisPlace);
document.querySelector('#ritual').addEventListener('click', onclickthisRitual);
