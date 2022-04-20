// styles

import "./RecipeList.css";

// utils
import { Link } from "react-router-dom";
import React from "react";

export default function RecipeList({ recipes }) {
  
  if(recipes.length === 0){
    return <div className="error">No recipes match the term ...</div>;
  }
  
  
  
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id} className="card">
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make.</p>
            <div>{recipe.method.substring(0, 100)}...</div>
            <Link to={`/recipes/${recipe.id}`}>Cook this!</Link>
          </div>
        );
      })}
    </div>
  );
}
