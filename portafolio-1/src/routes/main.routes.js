const express = require('Express');
const ruta = express.Router();
const path = require('path');

ruta.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports = ruta;