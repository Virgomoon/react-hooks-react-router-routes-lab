import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    <div>
      Title: {movies[0].title} ||{`\n`}
      Runtime: {movies[0].time}
      <ul>
        <li>{movies[0].genres[0]}</li>
        <li>{movies[0].genres[1]}</li>
        <li>{movies[0].genres[2]}</li>
      </ul>
    </div>
    <div>
    Title: {movies[1].title} ||{`\n`}
    Runtime: {movies[1].time}
      <ul>
        <li>{movies[1].genres[0]}</li>
        <li>{movies[1].genres[1]}</li>
        <li>{movies[1].genres[2]}</li>
        <li>{movies[1].genres[3]}</li>
        <li>{movies[1].genres[4]}</li>
      </ul>
    </div>
    <div>
    Title: {movies[2].title} ||{`\n`}
    Runtime: {movies[2].time}
      <ul>
        <li>{movies[2].genres[0]}</li>
        <li>{movies[2].genres[1]}</li>
        <li>{movies[2].genres[2]}</li>
        <li>{movies[2].genres[3]}</li>
        <li>{movies[2].genres[4]}</li>
      </ul>
    </div>
  </div>
  );
}

export default Movies;
