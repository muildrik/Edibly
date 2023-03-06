import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import RecipeTableRow from "./RecipeTableRow";
  
const RecipeList = () => {
  
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
        axios.get("http://localhost:4000/Recipes")
        .then(data => setRecipes(data.data))
        .catch((error) => {
            console.log(error);
        });
    }, []);
    
    const DataTable = () => {
        if (recipes.length) {
            return recipes.map((res, i) => <RecipeTableRow obj={res} key={i} />);
        } else {
            return []
        }
    };
    
    return (
        <div className="table-wrapper">
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Title</th>
                <th>Serving size</th>
            </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
        </Table>
        </div>
    );
};
  
export default RecipeList;