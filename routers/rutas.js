'use.strict'

const express = require('express');
const api = express.Router();

const Artistas = require('../controllers/artistasController');



//rutas de artisatas

api.get('/artistas.json', Artistas.getArtistasJson);



module.exports = api;