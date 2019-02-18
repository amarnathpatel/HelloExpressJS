var expressVar = require('express');
var app = expressVar();

app.get('/', function(req, res) {
    res.send("Hello world!");
});

app.listen(4000);