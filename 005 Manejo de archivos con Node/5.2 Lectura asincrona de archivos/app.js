var fs = require('fs');

var contenido = fs.readFile('./archivos/texto.txt', 'utf8', function(error, datos){
    console.log(datos);
});

//este se ejecutara primero que el metodo async
//sin detenerse en la linea 3

console.log("Contenido sin datos ",contenido);
