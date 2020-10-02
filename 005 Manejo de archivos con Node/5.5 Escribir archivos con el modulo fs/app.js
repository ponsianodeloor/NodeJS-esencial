var fs = require('fs');

fs.writeFile('./archivos/texto_creado.txt', 'Se ha creado un archivo con fs', (error)=>{
    if (error) {
        console.log('Ha existido un error ', error);
        
    } else {
        console.log('archivo creado correctamente');
        archivo();
    }
});

function archivo(){
    fs.appendFile('./archivos/texto_creado.txt', '\nSe ha creado un archivo con fs', (error)=>{
        if (error) {
            console.log('Ha existido un error ', error);
        } else {
            console.log('se ha agregado un texto adicional');
        }
    });
}
