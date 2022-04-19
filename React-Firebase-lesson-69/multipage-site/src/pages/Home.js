import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

// stylesss
import "./Home.css";

export default function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");

  return (
    <div className="home">
      <h2>Articles</h2>

      {isPending && <span>Loading..</span>}
      {error && <span>{error}</span>}
      {articles &&
        articles.map((article) => {
          return (
            <div key={article.id} className="card">
              <h3>{article.title}</h3>
              <p>{article.author}</p>
              <Link to={`/articles/${article.id}`}>Read more..</Link>
            </div>
          );
        })}
    </div>
  );
}
