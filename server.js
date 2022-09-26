const express = require('express');
const path = require('path');
const app = express();
const router = express.Router()
const port = process.env.PORT || 8080;
app.use(express.static('build'))

router.post('/')

app.listen(port, () => {
    console.log('Server is up!');
});
