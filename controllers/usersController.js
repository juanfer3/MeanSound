'use strict'

const User = require('../models/Users');

// Create Users
function SignUp (req, res) {

    let data = {
      nombre: req.body.nombre,
      email: req.body.email,
      password: req.body.password
    }

    let user_new = new User(data)

    

      user_new.save(function (error, users){
      // res.status(200)//.send({message: 'usuario registrado' }) 
      // res.status(200)//.send({message: 'usuario registrado' }) 
      if(error) return error
      res.json(users)     
     })

  }

  function LogIn (req, res) {

    let data = {
      email: req.body.email,
      password: req.body.password
    }

    User.find({'email': data.email, 'password': data.password}, function (error, users){
      if(error) return error
      if(users.length == 0) {
        res.json(false) 
      } else {
        res.json(true) 
      }
      
    })

  }

  module.exports = {
        SignUp,
        LogIn
  }