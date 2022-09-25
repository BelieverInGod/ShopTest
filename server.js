const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 8080;
app.use(express.static('build'))
app.listen(port, () => {
    console.log('Server is up!');
});
