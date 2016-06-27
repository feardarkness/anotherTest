
var AppRouteTarget = {
  setupLayout: function () {
    console.log("Layout Setup called");
  }
};


var UsersRouteTarget = {
  list: function () {
    // placeholder - use favorite ajax lib here    
	$.get('http://192.168.21.173:8088/interoperabilidad/servicios', function(data) {
		var template = $('#template').html();
	    Mustache.parse(template);   // optional, speeds up future uses  
		$.each(data, function(index, el){
			var rendered = Mustache.render(template, el);
	      	$('.cuerpo').append(rendered);    
		    
		});
	}).fail(function (err) {		
	});
    console.log("User List called");
  },
  
  show: function (request) {
    // placeholder - use favorite ajax lib here
    var user = { id: request.params.id };
    $.get('"http://192.168.21.173:8088/interoperabilidad/servicios"', function(data) {
		console.log(data);
	});
    console.log("User Show called");
    
  }
};

Aviator.setRoutes({
	target: AppRouteTarget,
	'/*': 'setupLayout',
	'/users': {
		target: UsersRouteTarget,
		'/': 'list',
		'/:id': 'show'
	}
});

Aviator.dispatch();

$(document).ready(function(){
	Aviator.navigate("/users");
});