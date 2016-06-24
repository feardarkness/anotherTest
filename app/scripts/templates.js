var datos = {
  "datosGenerales":{
    "identificador":1,
    "nombre":"Verificación de datos de persona",
    "descripcion":"Servicio que valida y retorna datos de una persona basado en su Carnet de identidad y fecha de nacimiento",
    "estado":"ACTIVO",
    "fechaInicioDisponibilidad":null,
    "fechaFinDisponibilidad":null,
    "propietario":"SEGIP",
    "fechaRegistro":null,
    "fechaActualizacion":null,
    "version":"1",
"documentacion":"https://www.segip.gob.bo/servicioweb/doc/465811",
"serviciosRelacionados":"http://www.servicios.gob.bo/Servicio/15302",
    "palabrasClave":"identificacion, persona, carnet"
  },
  "restriccionesUso":{
    "baseLegal":"Se tiene como base legal  en las previsiones establecidas en la Constitución Politica del Estado, la Ley del Órgano Electoral Plurinacional y disposiciones Legales referidas al acceso de información. https://www.agetic.gob.bo/servicios/conveinos?id=654654",
    "prerrequisitos":"Se requiere un convenio interinstitucional, contactar con el encargado de área jurídica del  SEGIP. https://www.segip.gob.bo/index.php/consultas-al-segip",
    "tarifa":"Publicas con Convenio  sin  costo. Otras entidades no gubernamentales de acuerdo a convenio.",
    "restriccionesAdicionales":"No existe"
  },
  "contactos":[
    { "tipo":"administrativo",
      "responsable":"Juan Pinto",
      "correoElectronico":"jp@segip.gob.bo",
      "telefono":"22325555",
      "cargo":"Jefe Unidad Registro personas"
    },
    {"tipo":"legal",
      "responsable":"Paola Jurado",
      "correoElectronico":"pj@segip.gob.bo",
      "telefono":"22325554",
      "cargo":"Director area juridicca"
    },
    {"tipo":"tecnico",
      "responsable":"Jaime Arteaga",
      "correoElectronico":"ja@segip.gob.bo",
      "telefono":"22325556",
      "cargo":"Responsable de sistemas"
    }
  ],
  "informacionTecnica":{
"url":"http://www.segip.gob.bo/ServicioExternoInstitucion.svc?wsdl",
    "tipo":"SOAP",
    "entorno":"PRODUCCION",
    "datosEntrada":"CI, Fecha_nacimiento",
    "datosSalida":"Nombre, Apellido, Apellido esposo, Carnet, Complemento",
    "coberturaTemporal":"24/7",
    "tipoConexion":"Fibra Optica",
"softwareRelacionado":"http://gitlab.softwarelibre.gob.bo/segip/consultapersonas,http://gitlab.softwarelibre.gob.bo/servicios/segip/personas,http://gitlab.softwarelibre.gob.bo/servicios/busa/validacionPersonas"
  },
  "seguridad":{
    "politicasSeguridad":"El ingreso se restringe por código de institución, usuario y contraseña. Se requiere una conexión de fibra óptica dedicada asegurada con una VPN.",
    "tipoAutenticacion":"HTTP Basic",
    "firma":"NO",
    "https":"NO"
  }
}
;

(function loadUser() {
  var template = $('#template').html();
  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, datos);
  $('.cuerpo').append(rendered);
})();