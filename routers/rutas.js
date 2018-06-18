'use.strict'

const express = require('express');
const api = express.Router();

const Artistas = require('../controllers/artistasController');
const Users = require('../controllers/usersController');


//rutas de artisatas

api.get('/artistas.json', Artistas.getArtistasJson);
api.post('/users/new', Users.SignUp);
api.post('/login', Users.LogIn);

api.post('/users', (req, res, next) => {
    const user = req.body;
    if(!user.nombre) {
        res.status(400).json({
            error:'Bad Data'
        })
    } 
})




module.exports = api;