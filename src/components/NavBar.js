import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div>
      <NavLink to="/" className="navbar">Home</NavLink>
      <br/>
      <NavLink to="/movies" className="navbar">Movies</NavLink>
      <br/>
      <NavLink to="/directors" className="navbar">Directors</NavLink>
      <br/>
      <NavLink to="/actors" className="navbar">Actors</NavLink>
  </div>);
}

export default NavBar;
