var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(peticion, respuesta, next) {
  respuesta.send('Informacion dinamica');
});

router.get('/:datoURL/:otroParametro', function(peticion, respuesta, next) {
  respuesta.send('Informacion dinamica: ' + peticion.params.datoURL + peticion.params.otroParametro);
});

module.exports = router;
