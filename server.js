const express = require('express');
const {useParams} = require("react-router-dom");
const app = express();
app.use(express.static('build'));

app.get(`/category/1/Post`, function(req,res) {
    res.sendFile(__dirname + '/build/index.html')
});

app.listen(process.env.PORT || 8080);
