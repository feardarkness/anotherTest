function Servicio(){
	var listar = $.get('"http://192.168.21.173:8088/interoperabilidad/servicios"', function(data) {
		console.log(data);
	});
}