import React from "react";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" },
];

const Characters = () => {


    const characterEl = swCharacters.map(char => (
        <div key={char.name}>
            <h3 style={{color: char.type === "Jedi" ? "blue" : "red"}}>Name: {char.name}</h3>
            <p>Type: {char.type}</p>
        </div>
    ))
  return (
  <main>
    <h1>Star wars characters</h1>
    {characterEl}
  </main>
  );
};

export default Characters;
