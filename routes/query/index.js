const router = require("express").Router();
const axios = require("axios")
const cheerio = require("cheerio")

router.get("/allrecipes", (req, res) => {
    // Receiving the req.query.url as the value of the recipe
    axios.get(req.query.url)
        .then(response => {
            console.log("Complete extraction!")

            // Use cheerio to load the data and set an object recipe
            $ = cheerio.load(response.data)
            let recipe = {};
            recipe.ingredients = [];
            recipe.steps = [];
            recipe.source = req.query.url;

            // Set the title
            recipe.title = $("#recipe-main-content").text()
            
            // Set the ingredients
            $(".recipe-ingred_txt").each(function(i, element) {
                let ingredient = $(this).text();
                if(ingredient === "" || ingredient === "Add all ingredients to list") {
                    // do nothing
                }
                else {
                    recipe.ingredients.push(ingredient)
                };
            })

            // Set the steps
            $(".recipe-directions__list--item").each(function(i, element) {
                let step = $(this).text().trim();
                if(step === "") {
                    // do nothing
                }
                else {
                    recipe.steps.push(step);
                };
            })

            // Send the recipe after being parsed
            res.send(recipe)
        });



    // res.send(req.query.url)
})

module.exports = router