const fs = require('fs');
const zlib = require('zlib');

// let readable = fs.createReadStream('./big.txt');
// let compress = fs.createWriteStream('./big.txt.gz');

// let gzip = zlib.createGzip();

// readable.pipe(gzip).pipe(compress);

let readableZip = fs.createReadStream('./big.txt.gz');
let unZip = zlib.createGunzip();
let decompress = fs.createWriteStream('./bigDecompress.txt');

readableZip.pipe(unZip).pipe(decompress);
