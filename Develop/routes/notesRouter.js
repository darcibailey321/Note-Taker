const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const { readFile, writeFile } = require('../helpers/fsUtils');
const { title } = require('process');
const { text } = require('express');


router.get('/', (req, res) => {
    readFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
    
});

router.post('/', (req, res) => {

    const { title, text } = req.body;

    const newNote = {
        title: title,
        text: text,
        id: uuidv4(),


    };

    readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
            const parsedData = JSON.parse(data);        
            parsedData.push(newNote);
            writeFile(
                './db/db.json',
                JSON.stringify(parsedData, null, 4));

}
});

res.sendFile(path.join(__dirname, '../public/notes.html'));

});

module.exports = router