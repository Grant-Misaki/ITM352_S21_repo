var express = require('express');
var app = express();


app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path + ' with query ' + JSON.stringify(request.query));
    next();
});

    app.get('public/index.html', function(request, response, next)    {
        response.send()
   
     });

    console.log(`listening on port 8080`)
    app.use(express.static('.'));
    app.listen(8080, function () {
}
);