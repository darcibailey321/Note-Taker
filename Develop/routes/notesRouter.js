const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const { readFile } = require('fs');
const { title } = require('process');
const { text } = require('express');

router.get('/', (req, res) => {
    readFile('/db/db.json').then((data) => res.json(JSON.parse(data)))
});

router.post('/', (req, res) => {
   const NewNote = {
       title: title, 
       text: text,
       id: uuidv4(),

    const {title, text} = req.body;
   };


   }
});

module.exports = router