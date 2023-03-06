// let mongoose = require("mongoose"),
let express = require("express")
let router = express.Router()
  
// Load recipes schema
let recipeSchema = require("../models/recipes")

// Pass recipes schema to database interaction module
let database = require("../database/db")(recipeSchema)

// Routes
router.get("/", (req, res) => {
  console.log('1')
  res.json(database.findAll())
})
router.post("/new-recipe", (req, res, next) => console.log(2) && res.json(JSON.stringify(newInstance(req.body))))
router.delete("/delete-recipe/:id", (req, res, next) => console.log(3) && res.json(JSON.stringify(database.delete(req.params.id))))
router.route("/update-recipe/:id").get((req, res) => console.log(4) && res.json(JSON.stringify(database.update(req.params.id, data))))
    
module.exports = router;