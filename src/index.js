'use strict'
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res)=>{
  if(err) {
    console,log(`error al conectarse a la base de datos: ${err}`)
  }
  console.log(`Conexion a la base de datos establecida con base de datos`)
  app.listen(config.port, ()=>{
    console.log(`Proyecto Carriendo en puerto: ${config.port}`)
  })
})