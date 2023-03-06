// let mongoose = require("mongoose"),
let express = require("express")
let router = express.Router()
  
// Recipe Model
let recipeSchema = require("../models/Recipe");

// Asynchronous functions
findAll = async () => {
  const result = await recipeSchema.find()
  return result
}

findByID = async id => {
  const result = await recipeSchema.findById(id)
  return result
}

findByIDandUpdate = async (id, data) => {
  const result = await recipeSchema.findByIdAndUpdate(id, { $set : data })
  return result
}

findByIDandDelete = async id => {
  const result = await recipeSchema.findByIdAndRemove(id)
  return result
}

newRecipe = async body => {
  console.log(recipeSchema)
  const result = await recipeSchema.create(body)
  return result
}

// Get all recipes
router.get("/", (req, res) => {
  findAll().then(result => {
    res.json(result)
  })
});

// router.get("/new-recipe", (req, res) => {
//   result = 
//   res.json({})
// })

// Add new recipe
router.post("/new-recipe", (req, res, next) => {
  result = newRecipe(req.body)
  res.json(JSON.stringify(result))
});
  
// UPDATE recipe
router
  .route("/update-recipe/:id")
  .get((req, res) => {
    result = findByID(req.params.id)
    res.json(JSON.stringify(data))
    // recipeSchema.findById(
    //     req.params.id, (error, data) => {
    //   if (error) {
    //     return next(error);
    //   } else {
    //     res.json(data);
    //   }
    // });
  })
  
  // Update Recipe Data
  .put((req, res, next) => {
    result = findByIDandUpdate(req.params.id, req.body)
    res.json(JSON.stringify(result))
    // recipeSchema.findByIdAndUpdate(
    //   req.params.id,
    //   {
    //     $set: req.body,
    //   },
    //   (error, data) => {
    //     if (error) {
    //       return next(error);
    //       console.log(error);
    //     } else {
    //       res.json(data);
    //       console.log("Recipe updated successfully !");
    //     }
    //   }
    // );
  });
  
// Delete Recipe
router.delete("/delete-recipe/:id", (req, res, next) => {
  result = findByIDandDelete(req.params.id)
  res.json(JSON.stringify(result))
});
  
module.exports = router;