const data = require('./data');

const totalSeconds = normalizeData(data)
    .split('</li>')
    .filter(isFlexboxVideo)
    .map(getminutesAndSecondFromString)
    .map(minutesAndSecondsToTotalSeconds)
    .reduce((total, num) => total += num)

console.log(`Segundos totales: ${totalSeconds}`);

function normalizeData(data) {
    const normalizeData = data
        .replace('<ul>', '')
        .replace('</ul>', '')
        .toLowerCase()
    return normalizeData

}

function isFlexboxVideo(value) {
    return value.includes('flexbox');
}

function getminutesAndSecondFromString(value) {
    return value.substring(value.indexOf("\"") + 1, value.lastIndexOf("\""));
}

function minutesAndSecondsToTotalSeconds(value) {
    let [minutes, seconds] = value.split(":").map(value => parseInt(value, 10))
    return minutes * 60 + seconds;
}
