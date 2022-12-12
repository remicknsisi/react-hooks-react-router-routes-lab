import React from "react";
import { actors } from "../data";

function Actors() {

  return (
  <div>
    <h1>Actors Page</h1>
    <div>
      <h2>Name: {actors[0].name}</h2>
      Movies:
      <ul>
        <li>{actors[0].movies[0]}</li>
        <li>{actors[0].movies[1]}</li>
        <li>{actors[0].movies[2]}</li>
      </ul>
    </div>
    <div>
      <h2>Name: {actors[1].name}</h2>
      Movies:
      <ul>
        <li>{actors[1].movies[0]}</li>
        <li>{actors[1].movies[1]}</li>
        <li>{actors[1].movies[2]}</li>
      </ul>
    </div>
    <div>
      <h2>Name: {actors[2].name}</h2>
      Movies:
      <ul>
        <li>{actors[2].movies[0]}</li>
        <li>{actors[2].movies[1]}</li>
        <li>{actors[2].movies[2]}</li>
      </ul>
    </div>
    <div>
      <h2>Name: {actors[3].name}</h2>
      Movies:
      <ul>
        <li>{actors[3].movies[0]}</li>
        <li>{actors[3].movies[1]}</li>
        <li>{actors[3].movies[2]}</li>
      </ul>
    </div>
  </div>);
}

export default Actors;
