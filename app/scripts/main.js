console.log('Main js called');

$(".cuerpo").on('click', '.navigate-service', function(event) {	
	event.preventDefault();
	console.log("aaaaaaaaaaaaaaaaaaaaaaa");
	console.log(this);
	var id = $(this).html();
	Aviator.navigate("/users");

});

