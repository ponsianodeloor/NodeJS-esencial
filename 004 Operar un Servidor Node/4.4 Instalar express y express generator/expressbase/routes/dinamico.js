var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(peticion, respuesta, next) {
  //respuesta.send('Informacion dinamica');
  respuesta.render('dinamico', { title: 'Dinamico' });
});

router.get('/:datoURL/:otroParametro', function(peticion, respuesta, next) {
  //respuesta.send('Informacion dinamica: ' + peticion.params.datoURL + peticion.params.otroParametro);
  respuesta.render('dinamico', { 
    title: 'Dinamico',
    datos:{
      parametroURL1: peticion.params.datoURL,
      parametroURL2: peticion.params.otroParametro
    }
   });
});

module.exports = router;
