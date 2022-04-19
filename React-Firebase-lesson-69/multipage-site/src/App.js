import "./App.css";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

// all our pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          {/* we can use Link to, and these are better than regular a HTML tags bc they prevent the app to make a new request*/}
          {/* we also have navLinks */}
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        {/* Switch components make it possible to react to only match one path  */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
