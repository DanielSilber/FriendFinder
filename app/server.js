var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");


var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname + '/app/public')));


require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

