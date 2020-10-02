//async
var fs = require('fs');
fs.readFile('./archivos/libros.json', (error, datos)=>{
    console.log(JSON.parse(datos).autor);
    
});

var rutaJSON = require('./archivos/libros.json');
console.log(rutaJSON.autor);


