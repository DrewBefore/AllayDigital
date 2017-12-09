var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.all('*', (req, res) => {
    res.status(200).sendFile(__dirname + '/dist/index.html');
});
//tests
app.listen(process.env.PORT || 8080);
