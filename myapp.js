const express = require('express');
let app = express();
var prof = ['pepe','maria','jose','santi','marco','polo'];

app.get('/', function(request, response){
    response.send('hola');
})

app.get('/test', function(request, response){
    response.send(prof);
})

app.post('/test', function(request, response){
    console.log(request.body)
    response.send("recibido");

    /*console.log(request.body)
    prof.push(request.body);
    response.send("recibido");
    console.log('recibido');
    console.log(prof);*/
})

app.listen(3005);
console.log('la aplicacion esta escuchan el puerto 3005');