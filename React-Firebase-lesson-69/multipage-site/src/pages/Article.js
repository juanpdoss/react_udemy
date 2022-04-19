import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Article() {
  //params.id will have the data contained in the url, is called id because we picked that name inside the path of the Route component in App.js
  const { id } = useParams();
  const url = `http://localhost:3000/articles/${id}`;
  const { data: article, isPending, error } = useFetch(url);
  const navigate = useNavigate();

  const articleToString = (article) => {
    return `Article title: ${article.title}, author: ${article.author}`;
  };

  // useEffect who have the error object as an element inside the dependencies array
  // is gonna be executed if the error changes himself from null to an actual error
  // we want this behavior on our component to act on error detection
  useEffect(() => {
    if (error) {
      // we handle the error
      setTimeout(() => {
        navigate("/"); // navigates back to the home page after 3 seconds
      }, 3000);
    }
  }, [error]);

  return (
    <div>
      <h3>Information about article with the id {id} below...</h3>

      {isPending && <p>Loading ... </p>}
      {article && <p>{articleToString(article)}</p>}
      {error && <span>{error}</span>}
    </div>
  );
}
