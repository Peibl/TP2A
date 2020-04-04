let data = require('./data');
normalizeString();
let totalSeconds = data.split('</li>')
    .filter(areFlexboxVideo)
    .map(mapStringForMinutesAnsSeconds)
    .map(minutesAndSecondsToTotalSeconds)
    .reduce((total, num) => total += num)

console.log(`Segundos totales ${totalSeconds}`);

function areFlexboxVideo(value) {
    return value.includes('flexbox');
}

function minutesAndSecondsToTotalSeconds(value) {
    let minutesSeconds = value.split(":");
    return parseInt(minutesSeconds[0], 10) * 60 + parseInt(minutesSeconds[1], 10);
}

function mapStringForMinutesAnsSeconds(value) {
    return value.substring(value.indexOf("\"") + 1, value.lastIndexOf("\""));
}

function normalizeString() {
    data = data.replace('<ul>', '');
    data = data.replace('</ul>', '');
    data = data.toLowerCase();
}
