// EditRecipe Component for update recipe data
  
// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeForm from "./RecipeForm";
  
// EditRecipe Component
const EditRecipe = (props) => {
  
    const [formValues, setFormValues] = useState({
        title: "",
        serving_size: ""
    });
    
    //onSubmit handler
    const onSubmit = (recipeObject) => {
        const url = `http://localhost:4000/recipes/update-recipe/${props.match.params.id}`
        axios
        .put(url, recipeObject)
        .then((res) => {
            if (res.status === 200) {
            alert("Recipe successfully updated");
            props.history.push("/recipe-list");
            } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
    };
    
    // Load data from server and reinitialize recipe form
    useEffect(() => {
        const url = `http://localhost:4000/recipes/update-recipe/${props.match.params.id}`
        axios
        .get(url)
        .then((res) => {
            const { title, serving_size } = res.data;
            setFormValues({ title, serving_size });
        })
        .catch((err) => console.log(err));
    }, [props.match.params.id]);
    
    // Return recipe form
    return (
        <RecipeForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>Update Recipe</RecipeForm>
    );
};

// Export EditRecipe Component
export default EditRecipe;