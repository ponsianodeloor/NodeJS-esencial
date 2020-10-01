var http = require("http");

/**
 * peticion obtiene informacion del url, cliente (Mozilla, Chrome), hora, ip
 * respuesta
 */
var servidor = http.createServer( function(peticion, respuesta){
    console.log("peticion web");
    respuesta.writeHead(200, {'Content-type': 'text/html'});
    respuesta.write("Respuesta para la direccion: " + peticion.url);
    
});

servidor.listen(3000);
console.log("Ejecutando Servidor NodeJS");
