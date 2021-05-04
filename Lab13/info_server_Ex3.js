var express = require('express');
var app = express();
var myParser = require("body-parser");
app.use(myParser.urlencoded({ extended: true }));

//
app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path + ' with query ' + JSON.stringify(request.query));
    next();
});

//gets a response from the browser, 
app.get('/test', function (request, response, next) {
    response.send('I got a request for /test');
});

//posts the data to the server
app.post('/display_purchase', function (request, response, next) {
    post_data=request.body;
    response.send(post_data);
});

//creates a static file from the directory called public.
app.use(express.static('./public'));


// the server listens for 8080
app.listen(8080,  function() {
    console.log(`listening on port 8080`)
}
    ); // note the use of an anonymous function here 
    function isNonNegInt(q, returnErrors=false) {
        if(q=='') q=0;
        var errors = []; // assume no errors at first
        if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
        if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
        if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer 
    
        return returnErrors ?  errors : (errors.length == 0);
    }