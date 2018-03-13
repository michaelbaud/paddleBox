
var paddleBoxTouches = document.querySelectorAll('.touch');

paddleBoxTouches.forEach(function(element) {
	element.addEventListener("click", joueLeSon, false)

})

function joueLeSon() {
	console.log(this.id)
	var test = document.getElementById(this.id+'_son');
	test.play();
}



		
	



