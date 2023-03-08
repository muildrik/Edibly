// CreateIngredient Component for add new ingredient
  
// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import PreferencesForm from "./preferencesForm";
  
// CreateIngredient Component
const Preferences = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '' })
  
    // onSubmit handler
  const onSubmit = preferences => {
    axios.post('http://localhost:4000/api/preferences/update', preferences)
      .then(res => {
        if (res.status === 200)
          alert('Preferences successfully updated')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return ingredient form
  return(
    <div>
        <h1>Preferences</h1>
        <PreferencesForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>Save changes</PreferencesForm>
    </div>
  )
}
  
// Export CreateIngredient Component
export default Preferences