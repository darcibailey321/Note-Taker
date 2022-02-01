const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const writeFile = (filePath, fileData) => {
    fs.writeFile(filePath, fileData, (err) =>
    err ? console.error(err) : console.log("update successful"));

};

module.exports = { readFile, writeFile };