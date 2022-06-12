import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
    <div>
      Name: {directors[0].name}
      {<br />}Movies: 
      <ul>
        <li>{directors[0].movies[0]}</li>
        <li>{directors[0].movies[1]}</li>
        <li>{directors[0].movies[2]}</li>
      </ul>
    </div>
    <div>
      Name: {directors[1].name}
      {<br />}Movies: 
      <ul>
        <li>{directors[1].movies[0]}</li>
        <li>{directors[1].movies[1]}</li>
        <li>{directors[1].movies[2]}</li>
      </ul>
    </div>
    <div>
      Name: {directors[2].name}
      {<br />}Movies: 
      <ul>
        <li>{directors[2].movies[0]}</li>
        <li>{directors[2].movies[1]}</li>
        <li>{directors[2].movies[2]}</li>
      </ul>
    </div>
  </div>
  );
}

export default Directors;
