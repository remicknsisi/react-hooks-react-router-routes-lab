import React from "react";
import { movies } from "../data";

function Movies() {

  console.log(movies)

  return (
  <div>
    <h1>Movies Page</h1>
    <div>
      <h2>Name: {movies[0].title}</h2>
      Time: {movies[0].time}
      <br/>
      <br/>
      Genres:
      <ul>
        <li>{movies[0].genres[0]}</li>
        <li>{movies[0].genres[1]}</li>
        <li>{movies[0].genres[2]}</li>
      </ul>
    </div>
    <div>
      <h2>Name: {movies[1].title}</h2>
      Time: {movies[1].time}
      <br/>
      <br/>
      Genres:
      <ul>
        <li>{movies[1].genres[0]}</li>
        <li>{movies[1].genres[1]}</li>
        <li>{movies[1].genres[2]}</li>
        <li>{movies[1].genres[3]}</li>
        <li>{movies[1].genres[4]}</li>
      </ul>
    </div>
    <div>
      <h2>Name: {movies[2].title}</h2>
      Time: {movies[2].time}
      <br/>
      <br/>
      Genres:
      <ul>
        <li>{movies[2].genres[0]}</li>
        <li>{movies[2].genres[1]}</li>
        <li>{movies[2].genres[2]}</li>
        <li>{movies[2].genres[3]}</li>
        <li>{movies[2].genres[4]}</li>
      </ul>
    </div>
  </div>);
}

export default Movies;
