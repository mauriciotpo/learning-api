var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send ('My First Api!');
});

app.get('/funions', function(request, response) {
    response.send('Yo give me some funions fool!');
});

app.get('/mauricio', function(request, response) {
    response.send('AGORA VAI PAPAI!');
});

app.listen(3000, function( ){
    console.log("First Api runnig on POrt 3000!");
});

