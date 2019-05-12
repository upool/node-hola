const fs = require('fs');

/*
fs.writeFile('./mifile.txt', 'contenido del txt', function(error){
    if(error)
        console.log(error);
    else
        console.log('Archivo creado...');
});*/


fs.readFile('./mifile.txt', function(error, data){
    if(error){
        console.log('error al leer el archivo');
    }else{
        console.log(data.toString());
    }
})