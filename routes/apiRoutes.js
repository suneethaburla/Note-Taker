const router = require('express').Router();
const db = "../db/db.json";
const fs = require("fs");

// This mini version of the app has /api prepended to every route

//get route
router.get("/notes", (req, res) => {
    fs.readFile(db, "utf8", function(err, data) {
        if (err) throw err;
        //data returns a JSON string so parse it to get an object
        res.json(JSON.parse(data));
})
})

//post route
router.post("/notes", (req, res) => {
    let newNotes = req.body;
    fs.readFile(db, "utf8", function(err, data) {
        if (err) throw err;
        //data returns a JSON string so parse it to get an object
        let jsonDb = JSON.parse(data);
        //create an unique id for each newNotes
        newNotes.id = json.length + 1;
        //push the newNotes to the jsonDb
        jsonDb.push(newNotes);
        //stringify the object and write it to db
        fs.writeFile(db, JSON.stringify(jsonDb), err => {
            if (err) throw err;
            res.json({ success: true });
        })
})
})

// delete route
router.delete("/notes/:id", (req, res) => {
    //grab id from req.params
    let noteId = req.params.id;
    fs.readFile(db, "utf8", (err, data) => {
        if (err) throw err;
        //JSON parse the data to get allNotes object
        let allNotes = JSON.parse(data);
        //Drop everything from the currentNotes where the note.id matches with the  noteId to get newNotes
        let newNotes = allNotes.filter(note => note.id != noteId);
        //stringify the newNotes and write it to db
        fs.writeFile(db, JSON.stringify(newNotes), err => {
            if (err) throw err;
            res.json({ success: true });
        })
    })
})

module.exports = router;
