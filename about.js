console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert("Form has been submitted successfully");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



function onmouseover(evt) {
	evt.preventDefault();
	
	alert("Give the user a compliment");	
}


let image=document.querySelector('#rubberDuck')
//console.log(image)
image.addEventListener('mouseover', onmouseover);


