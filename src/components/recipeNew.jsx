// Import Modules
import React, { useState } from "react";
import axios from 'axios';
import RecipeForm from "./RecipeForm";
  
// NewRecipe Component
const NewRecipe = () => {
  
    const [formValues] = useState({ title: '', name: '', serving_size: '' })
  
    // onSubmit handler
    const onSubmit = recipeObject => {
        
        console.log(recipeObject)
        
        axios.post('http://localhost:4000/recipes/new-recipe', recipeObject)
        .then(res => {
            if (res.status === 200)
            alert('Recipe added')
            else
            Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
    }
        
    // Return recipe form
    return (
        <RecipeForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>Add recipe</RecipeForm>
    )
}
  
// Export NewRecipe Component
export default NewRecipe