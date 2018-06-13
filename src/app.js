const cors = require('cors');
const express = require('express');
const app = express();
const api = require('../routers/rutas');
const path = require('path');
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);


//Vistas
// view engine setup JADE

/*
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
*/

// view engine setup HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')

//Body Json and Public folder
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist/client')));


app.listen(app.get('port'), () => {
    console.log('server on port 3000 !');
})

//rutas parra las vistas

app.use('/api', api)

module.exports = app;