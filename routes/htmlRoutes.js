
const router = require('express').Router();
const path = require('path');


//In case any route matches /

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './../public', 'index.html'));
});

//In case any route matches /notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './../public', 'notes.html'));
});

module.exports = router;
