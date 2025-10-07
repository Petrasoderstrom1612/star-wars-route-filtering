import React from "react";
import { useSearchParams, Link } from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" },
];

const Characters = () => {
const [searchParams, setSearchParams] = useSearchParams()

const filterParam = searchParams.get("type")
console.log(searchParams)

const possiblyFilteredCharacters = filterParam ? swCharacters.filter(oneChar => oneChar.type.toLocaleLowerCase() === filterParam): swCharacters //if you write wrong filterParam, the ternary will go to if as filterParam is true and return an empty [] as it wil get 0 match on .type. That means mapping will not have anything to map over, hence not return anything.

    const characterEl = possiblyFilteredCharacters.map(char => (
        <div key={char.name}>
            <h3 style={{color: char.type === "Jedi" ? "blue" : "red"}}>Name: {char.name}</h3>
            <p>Type: {char.type}</p>
        </div>
    ))
  return (
  <main>
    <h1>Star wars characters</h1>
    <nav>
      <Link to="?type=jedi">Jedis </Link>
      <Link to="?type=sith">Siths </Link>
      <Link to=".">Clear search</Link> {/* It would also work with empty ""  meaning clear what is there */}
    </nav>
    {characterEl}
  </main>
  );
};

export default Characters;
