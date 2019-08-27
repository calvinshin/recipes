const router = require("express").Router();
const axios = require("axios")

router.get("/allrecipes", (req, res) => {
    // Receiving the req.query.url as the value of the recipe
    axios.get(req.query.url)
        .then(response => {
            console.log("Complete extraction!")
            res.send(response.data)
        });



    // res.send(req.query.url)
})

module.exports = router