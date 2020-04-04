let data = require('./data');
<<<<<<< HEAD
console.log(data)
normalizeData();
const totalSeconds = dataToArray()
    .filter(isFlexboxVideo)
    .map(getminutesAndSecondFromString)
=======
normalizeData();
const totalSeconds = dataToArray()
    .filter(isFlexboxVideo)
    .map(mapStringForMinutesAnsSeconds)
>>>>>>> a5a5b07134cd173ae7debe286f3f35aec1ef1ddb
    .map(minutesAndSecondsToTotalSeconds)
    .reduce((total, num) => total += num)

console.log(`Segundos totales: ${totalSeconds}`);

function dataToArray() {
    return data.split('</li>');
}

function isFlexboxVideo(value) {
    return value.includes('flexbox');
}

function minutesAndSecondsToTotalSeconds(value) {
    let [minutes, seconds] = value.split(":").map(value => parseInt(value, 10))
    return minutes * 60 + seconds;
}

function getminutesAndSecondFromString(value) {
    return value.substring(value.indexOf("\"") + 1, value.lastIndexOf("\""));
}

function normalizeData() {
    data = data.replace('<ul>', '');
    data = data.replace('</ul>', '');
    data = data.toLowerCase();
}
