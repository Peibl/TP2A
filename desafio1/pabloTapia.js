let data = require('./data');
normalizeData();
const totalSeconds = dataToArray()
    .filter(isFlexboxVideo)
    .map(getminutesAndSecondFromString)
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
