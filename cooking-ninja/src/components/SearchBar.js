// styles
import "./SearchBar.css";

//utils
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?term=${term}`);
    
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          required
          value={term
        }
        ></input>
      </form>
    </div>
  );
}
