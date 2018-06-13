'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Artistas = Schema ({
    nombre: String,
    likes: Number,
    comment: Number
})

module.exports = mongoose.model('artistas', Artistas);