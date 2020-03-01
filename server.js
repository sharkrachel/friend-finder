var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

//turn encrypted information into json and the result will be put in req.body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("./app/public"));

 require("./app/routing/htmlRoutes")(app);
 require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
