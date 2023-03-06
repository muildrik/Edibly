// CreateIngredient Component for add new ingredient
  
// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
// import IngredientForm from "./IngredientForm";
  
// CreateIngredient Component
const NewIngredient = () => {
  const [formValues, setFormValues] = 
    useState({ name: '', email: '', rollno: '' })
  
    // onSubmit handler
  const onSubmit = ingredientObject => {
    axios.post('http://localhost:4000/ingredients/new-ingredient', ingredientObject)
      .then(res => {
        if (res.status === 200)
          alert('Ingredient successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return ingredient form
  return(
    <div>New ingredient</div>
    // <IngredientForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>Add Ingredient</IngredientForm>
  )
}
  
// Export CreateIngredient Component
export default NewIngredient