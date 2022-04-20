// styles
import "./Recipe.css";

//utils
import React   from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function Recipe() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    "http://localhost:3000/recipes/" + id
  );

  return (
    <div className="recipe">
      {isPending && <p className="loading">Loading ...</p>}
      {error && <span className="error">{error}</span>}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          <p>Takes {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{data.method}</p>
        </>
      )}
    </div>
  );
}
