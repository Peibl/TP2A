// STREAM
// Es una coleccion de datos como arrays o string. La diferencia es que se maneja
// de a pedazos

const fs = require('fs');
const path = './big.txt';
const pathDestino = './bigcopia.txt';

//const readable = fs.createReadStream(path, 'utf-8');
const readable = fs.createReadStream(path, 
    {encoding: 'utf-8', highWaterMark: 1024}
    );

readable.on('data', chunk => {
    console.log(chunk);
    console.log("**************************************");
});

// evento 'data', es emitido cuando el stream pasa a chunk los datos
// evento 'end', es emitido cuando no hay mas datos en el sream
// highWaterMark es el tamaño del buffer o chunk

const writable = fs.createWriteStream(pathDestino);

// PIPE: Conector de dos stream
readable.pipe(writable);