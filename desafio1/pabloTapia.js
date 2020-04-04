let data = require('./data');
normalizeData();
const totalSeconds = dataToArray()
    .filter(isFlexboxVideo)
    .map(mapStringForMinutesAnsSeconds)
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
    let minutesSeconds = value.split(":");
    return parseInt(minutesSeconds[0], 10) * 60 + parseInt(minutesSeconds[1], 10);
}

function mapStringForMinutesAnsSeconds(value) {
    return value.substring(value.indexOf("\"") + 1, value.lastIndexOf("\""));
}

function normalizeData() {
    data = data.replace('<ul>', '');
    data = data.replace('</ul>', '');
    data = data.toLowerCase();
}
