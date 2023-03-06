const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let preferencesSchema = new Schema({
  name: { type: String },
  serving_size : { type: Number },
  ingredients: { type: Array },
}, {
    collection: 'Preferences'
})
  
module.exports = mongoose.model('preferences', preferencesSchema)