var fs = require('fs');

fs.copyFile('./archivos/archivo_original.txt', './archivos/archivo_copia.txt', (error)=>{
    if (error) {
        console.log('Ha existido un error ', error);        
    } else {
        console.log('archivo copiado correctamente');
        //creamos una funcion para crear copiar escribir o lo que sea y la llamamos
    }
});