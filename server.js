const express = require('express');
const path = require('path');
const app = express();
const router = express.Router()
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 8080;
// app.use(express.static('build'))
app.use(express.static('build'));

app.get('/*', function(req,res) {
    res.sendFile(__dirname + '/build/index.html')
});

app.listen(process.env.PORT || 8080);
