// I could use {title, subtitle} too (JS object destructuring)
// like this -> export default function Title({title,subtitle})



export default function Title(props) {
  // instead of using a tag, (in this case span) we can use a react fragment too (because sometimes a tag is not necessary)
  // to do that we can use <> </>   
  // if we are going to use props on our fragment we have to use React.fragment
  return (
    <span className="title-section">
      <h1>{props.title}</h1>
      <br />
      <h2>{props.subtitle}</h2>
    </span>
  );
}
