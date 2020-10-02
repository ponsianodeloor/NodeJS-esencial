var fs = require("fs");

contenido = fs.readFileSync('./archivos/texto.txt', 'utf8');

console.log(contenido);
