import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Article() {
  //params.id will have the data contained in the url, is called id because we picked that name inside the path of the Route component in App.js
  const { id } = useParams();
  const url = `http://localhost:3000/articles/${id}`;
  const { data: article, isPending, error } = useFetch(url);

  const articleToString = (article) => {
    return `Article title: ${article.title}, author: ${article.author}`;
  };

  return (
    <div>
      <h3>Information about article with the id {id} below...</h3>

      {isPending && <p>Loading ... </p>}
      {article && <p>{articleToString(article)}</p>}
      {error && <span>{error}</span>}
    </div>
  );
}
