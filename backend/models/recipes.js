const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let recipeSchema = new Schema({
  title: { type: String },
  serving_size : { type: Number },
  ingredients: { type: Array },
}, {
    collection: 'Recipes'
})
  
module.exports = mongoose.model('Recipes', recipeSchema)