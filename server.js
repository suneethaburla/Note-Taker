const express = require('express');
const path = require('path');
const app = express();

// If we are in production (Heroku), process.env.PORT is true, 
// If we are in development it is false, default to 3000
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

//for every route that hits slash, use htmlRoutes
app.use ('/', htmlRoutes);
//for every route that hits slash, use apiRoutes
app.use ('/api', apiRoutes);


app.use(express.static('public'));

app.listen(PORT);