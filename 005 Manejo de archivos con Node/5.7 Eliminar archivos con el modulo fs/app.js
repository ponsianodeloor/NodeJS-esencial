var fs = require('fs');

fs.unlink('./archivos/archivo_original.txt', (error)=>{
    if (error) {
        console.log('Ha existido un error ', error);
    } else {
        console.log('archivo eliminado correctamente');
    }
});