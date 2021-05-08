var express = require('express');
var app = express();
var myParser = require("body-parser");
app.use(myParser.urlencoded({ extended: true }));


app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path + ' with query ' + JSON.stringify(request.query));
    next();
});

//gets a response from the browser, 
app.get('./index.html', function (request, response, next) {
    response.send()

});
//posts the data to the server
app.post('/display_login', function (request, response, next) {
    user_data = {'username': 'ITM352', 'password': 'grader'};
    post_data = request.body;
    //Assigns post data to the_qty and checks that it is a non  negative intger.
    if (post_data['quantity_textbox']) {
        the_qty = post_data['quantity_textbox'];

           //checks if the entered username matches a username we have in our system.
        if (user_data['username'] == post_data['uname']){
            if(user_data['password'] == post_data['pword']){
                response.send(invoice.html)
            }

        }
        
            
        } else {
            response.send(`${the_qty} is not a quantity! Press the back button and try again.`)
            return;
        }
    }
});

console.log(`listening on port 8080`)
app.use(express.static('.'));
app.listen(8080, function () {
}
);