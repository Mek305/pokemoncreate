const express = require('express');
const mustacheExpress =  require('mustache-express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();

const app = express()
const PORT = process.env.PORT || 8000;

app.engine('html',mustacheExpress())
app.set('view engine','html')
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// body-parser setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect router
app.use(require('./router'));

app.listen(PORT, () => console.log('Server is listening on port', PORT));