const http = require('http');
const colors = require('colors');

const createServer = function(req, res){
  res.writeHead(200, {'Content-type': 'text/html'});
  res.write("<h1>Hola Mundo !!</h1>");
  res.end();
}

var port = process.env.port || 3000;
const server = http.createServer(createServer);
server.listen(port, function(){
  console.log('Se ha iniciado el server...'.yellow);
});