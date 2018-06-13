'use strict'

const Artistas = require('../models/artistas');

function getArtistas (req, res){  
    Artistas.find(function(error, documento){
        if(error){console.log(error)}
        console.log(documento)
        res.render('artistas/index', {artistas: documento})
      })
  }

  function getArtistasJson (req, res){  
    Artistas.find(function(error, documento){
        if(error){console.log(error)}
        res.json({artistas: documento})
        //mostrar en page
        //console.log(documento)
        //res.render('artistas/index', {somos: documento})
      })
  }

  module.exports = {
    getArtistas,
    getArtistasJson
  }