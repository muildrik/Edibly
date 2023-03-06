// let mongoose = require("mongoose"),
let express = require("express")
let router = express.Router()
  
// Recipe Model
let recipeSchema = require("../models/Preferences")

let db = require("../database/db")(recipeSchema)

// Routes
router.get("/preferences", (req, res) => res.json(database.findOne()))
router.get("/preferences-update", (req, res) => res.json(database.update(req.params.id, data)))
// router.post("/new-recipe", (req, res, next) => res.json(JSON.stringify(newInstance(req.body))))
// router.delete("/delete-recipe/:id", (req, res, next) => res.json(JSON.stringify(database.delete(req.params.id))))
// router.route("/update-recipe/:id").get((req, res) => res.json(JSON.stringify(database.update(req.params.id, data))))
  
module.exports = router;