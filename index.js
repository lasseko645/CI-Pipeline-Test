//importing the node framework 
var express = require('express');

var app = express();

//respond with "hello world" for requests that go to our root "/"
app.get('/', function(req, res) {
    res.send('hello kost');
});

//listen to port 3000 as a default port, this can by changed later in the code this is just as a default
app.listen (process.env.PORT || 3000);

module.exports = app;