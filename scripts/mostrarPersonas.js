var rProm = require('request-promise'); //Importamos la libreria (esta obsoleta)

var opt = { //hacemos la peticion GET 
  method: 'GET',
  uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
  json: true
};

rProm(opt)
    .then(function(res){
      console.log(res); //Mostramos 
    }).catch(function(er){
      console.log('error: ' + er);
    })


