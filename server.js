const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 8080;
app.use(express.static(publicPath))
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
    console.log('Server is up!');
});


// app.use(express.static(__dirname + '/dist/ShopTest'));
// app.get('/*', function(req,res) {
//     res.sendFile(path.join(__dirname +
//         '/dist/ShopTest/index.html'));});
// app.listen(process.env.PORT || 8080);