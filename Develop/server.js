const express = require('express');
const path = require('path');
const fs = require('fs');
const routes = require('./routes')

const app = express();
const PORT = 3001;

app.use( express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', routes);

// const notes = require('./db/db.json');

app.get('/', (req,res) => {

  res.sendFile(path.join(__dirname, '/public/index.html'));

});

app.get('/notes', (req,res) => {
 
  res.sendFile(path.join(__dirname, '/public/notes.html'));

});  

// app.post('/api/notes', (res,req) => {
//   console.info(`${req.method} request received to add a note`);
//   //Access note data that was sent
//   const newNote = req.body;

//   //Create (persiist) data
//   fs.readFile('./db/db.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {

//   //Access new note data from request
//   const parsedNotes = JSON.parse(data);

//   //Push to existing list of notes
//   parsedNotes.push(newNote);

//   //Write updated note list to the 'db.json' file
//   fs.writeFile(
//     './db/db.json',
//     JSON.stringify(parsedNotes, null, 4),
//     (writeErr) =>
//       writeErr
//         ? console.error(writeErr)
//         : console.info('Successfully updated notes!')
//   );
//   }
// });
// })

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);