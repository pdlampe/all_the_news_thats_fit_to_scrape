var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var exphbs = require("express-handlebars");

var db = require("./models");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(logger("dev"));

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));



var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost.mongoHeadlines";

mongoose.connect(MONGODB_URI);

var routes = require("./controllers/controller.js");

app.use('/', routes);



app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});