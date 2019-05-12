const http = require('http');
const colors = require('colors');

const createServer = function(req, res){
  res.writeHead(200, {'Content-type': 'text/html'});
  res.write("<h1>Hola Mundo Nodejs !!</h1>");
  res.end();
}

const server = http.createServer(createServer);
server.listen(3000, function(){
  console.log('Se ha iniciado el server...'.yellow);
});