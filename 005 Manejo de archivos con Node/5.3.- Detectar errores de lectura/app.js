var fs = require('fs');
fs.readFile('./archivos/textos.txt', 'utf8', (error, datos)=>{
    if (error) {
        console.log('error de lectura', error);
        
    } else {
        console.log(datos);
    }
});