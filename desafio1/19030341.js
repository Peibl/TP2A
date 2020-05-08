//function(exports, module, require, __filename, __dirname){
let data = require('./data.js');

function parseVideos(str){
    return str
        .replace("<ul>", "")
        .replace("</ul>","")
        .split('</li>')
        .slice(0,-1)
        .map(video => (
            {
                duracion:video
                    .split('>')[0]
                    .split('=')[1]
                    .split('"').join('')
                    .split(':'),
                tipo:video.split('>')[1]
            }
        ))
        .map(video => ({
            duracion: parseInt(video.duracion[1]) + parseInt(video.duracion[0])*60,
            tipo: video.tipo
        }))
        .filter(video => video.tipo == 'Flexbox Video')
        .reduce((total,actual) => ({duracion: total.duracion + actual.duracion})).duracion;  
}


console.log(parseVideos(data));



// return module.exports;
//}