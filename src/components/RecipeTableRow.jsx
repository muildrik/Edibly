import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
// import RecipeEdit from "./components/recipeEdit";
  
const RecipeTableRow = (props) => {
  const { _id, title, serving_size } = props.obj;
  
  const deleteRecipe = () => {
    axios
      .delete(`http://localhost:4000/api/recipes/delete-recipe/${_id}`)
      .then(res => {
        if (res.status === 200) {
          alert("Recipe successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch(err => alert("Something went wrong"));
  };
  
  return (
    <tr>
      <td>{title}</td>
      <td>{serving_size}</td>
      <td>
        <Link className="edit-link" to={`api/recipes/edit/${_id}`}>Edit</Link>
        <Button onClick={deleteRecipe} size="sm" variant="danger">Delete</Button>
      </td>
    </tr>
  );
};
  
export default RecipeTableRow;