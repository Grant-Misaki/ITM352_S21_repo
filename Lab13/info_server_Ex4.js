var express = require('express');
var app = express();
var myParser = require("body-parser");
app.use(myParser.urlencoded({ extended: true }));


var products = require('./product_data.json');


//
app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path + ' with query ' + JSON.stringify(request.query));
    next();
});

app.get("/product_data.js", function (request, response, next) {
   var products_str = `var products = ${JSON.stringify(products)};`;
   response.send(products_str);
});


//gets a response from the browser, 
app.get('/test', function (request, response, next) {
    response.send('I got a request for /test');
});



//posts the data to the server
app.post('/display_purchase', function (request, response, next) {
    process_quantity_form(request.body, response);
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

    function process_quantity_form(post_data, response) {
        /* 
        Assigns post data to the_qty and checks that it is a non  negative intger. Also redirects the user
        back to the order page if they submit an invalid value. 
        */
        let model = products[1]['model'];
        let model_price = products[1]['price'];
        if (post_data['quantity_textbox'] )  {
            the_qty = post_data['quantity_textbox'];
            if (isNonNegInt(the_qty)) {  
        response.send(`<h2>Thank you for purchasing ${the_qty} ${model}. Your total is \$${the_qty * model_price}!</h2>`);
                return;
            } else{
                    response.redirect('./order_page.html?quantity_textbox='+the_qty);
                        return;
            }
        }
    }