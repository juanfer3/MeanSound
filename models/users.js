'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Users = Schema ({
    nombre: String,
    email: String,
    password: String
})

module.exports = mongoose.model('users', Users);