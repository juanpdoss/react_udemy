// utils
import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

//styles
import "./Navbar.css";

// components
import SearchBar from "./SearchBar";

export default function Navbar() {
  const { color, changeColor } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <NavLink exact to="/" className="brand">
          <h1>Coooking Juampi</h1>
        </NavLink>
        <SearchBar />
        <NavLink to="/create">Create recipe</NavLink>
      </nav>
    </div>
  );
}
