var http = require("http");

var servidor = http.createServer( function(){
    console.log("peticion web");
    
});

servidor.listen(3000);
console.log("Ejecutando Servidor NodeJS");
