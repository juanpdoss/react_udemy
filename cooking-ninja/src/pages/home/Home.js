//styles
import "./Home.css";

// utils
import { useFetch } from "../../hooks/useFetch";
import React from "react";

//components
import RecipeList from "../../components/RecipeList";

export default function Home() {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes");

  return (
    <div className="home">
      {error && <span className="error">{error}</span>}

      {isPending && <p className="loading">Loading ...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
 