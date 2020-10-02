var express = require("express");
var app = express();

app.all('/', function(peticion, respuesta){
  respuesta.send("Hola");
});

app.get('/about', function(peticion, respuesta){
  respuesta.send('Hola desde acerca')
});

app.post('/about', function(peticion, respuesta){
  respuesta.send('Has enviado datos de un formulario')
});

app.delete('/about', function(peticion, respuesta){
  respuesta.send('Hola desde acerca')
});

app.put('/about', function(peticion, respuesta){
  respuesta.send('Hola desde acerca')
});

var server = app.listen(3000, function(){

});