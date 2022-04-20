import React from "react";
import { NavLink } from "react-router-dom";

//styles
import "./Navbar.css";

// components
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink exact to="/" className="brand">
          <h1>Coooking Juampi</h1>
        </NavLink>
        <SearchBar/>
        <NavLink to="/create">Create recipe</NavLink>
      </nav>
    </div>
  );
}
