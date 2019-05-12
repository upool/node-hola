const express = require('express');
const colors = require('colors');

const server = express();
server.get('/', function(req, res){
  res.send("<h1>Hola Mundo Nodejs aqui !!</h1>");
})

server.listen(3000, function name(params) {
    console.log('escuchando en puerto 3000'.yellow);
});