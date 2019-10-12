var db = require("../models");

var axios = require("axios");
var cheerio = require("cheerio");

module.exports = function (app) {

    app.get("/api/articles", function (req, res) {

        axios.get("https://www.nytimes.com/").then(function (response) {
            var $ = cheerio.load(resopnse.data);

            $(".card-component").search(function (i, element)
            
            var results = {};
            )
    })

})
}