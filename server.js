var express = require("express");
var path = require("path");

// Sets up Express App
var app = express();
var PORT = process.env.PORT || 3001;

// Enables express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./app/public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });