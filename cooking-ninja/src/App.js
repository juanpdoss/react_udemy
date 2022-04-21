// styles
import "./App.css";

// routing imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

//components
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <ThemeSelector/>  
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/recipes/:id" element={<Recipe />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
