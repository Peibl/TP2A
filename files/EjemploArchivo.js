const fs = require('fs');
const path = './inventors.json';

let datos = fs.readFileSync(path, 'utf-8');

datos = JSON.parse(datos);

const inventor = {
    first : "Pablo",
    last: "Fernandez",
    year: 1976
}

datos.inventors.push(inventor);

fs.writeFileSync(path,JSON.stringify(datos, '', '\t'), 'utf-8');

console.log(datos);

// CRUD de Inventores

/**
 * 
 * @param {*} path ruta del archivo
 * @param {*} datos cadena  de inventors
 */
function saveInventors(path, datos){

}

/**
 * 
 * @param {*} inventor objeto iventor
 * @param {*} inventors array de inventores
 */
function pushInventors(inventor, inventors){

}

function removeInventor(iventor, inventors){

}

function updateInventor(inventor, inventors){

}

function filterInvento(inventor, inventors){

}


