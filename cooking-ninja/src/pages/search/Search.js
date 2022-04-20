// styles
import "./Search.css";

// utils
import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

//components
import RecipeList from "../../components/RecipeList";

export default function Search() {
  // gets the query value
  const queryString = useLocation().search; //
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("term");

  //preparing an URL using the query value
  const url = "http://localhost:3000/recipes?q=" + query;

  const { data, isPending, error } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {isPending && <span className="loading">Loading ...</span>}
      {error && <span className="error">{error}</span>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
