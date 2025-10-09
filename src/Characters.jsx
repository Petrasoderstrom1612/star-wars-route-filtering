import React from "react";
import { useSearchParams, Link } from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" },
  { name: "Krakana", type: "animal" },
];

const Characters = () => {
const [searchParams, setSearchParams] = useSearchParams()

const filterParam = searchParams.get("type")
console.log(searchParams)

const possiblyFilteredCharacters = filterParam ? swCharacters.filter(oneChar => oneChar.type.toLocaleLowerCase() === filterParam): swCharacters //if you write wrong filterParam, the ternary will go to if as filterParam is true and return an empty [] as it wil get 0 match on .type. That means mapping will not have anything to map over, hence not return anything.

    const characterEl = possiblyFilteredCharacters.map(char => (
        <div key={char.name}>
            <h3 style={{color: char.type === "Jedi" ? "blue" : char.type === "Sith" ? "red" : "purple"}}>Name: {char.name}</h3>
            <p>Type: {char.type}</p>
        </div>
    ))

    //This function will only modify the param with key "type" as per Links
    const generateNewSearchParamsSegment = (key, value) => { //a fnc to ensure you can concatenate several params in URL with & and only modify this specific param(segment) based on key
      const searchParametersSegment = new URLSearchParams(searchParams) //shallow copy of the current searchParams state fetched from URL
      if (value === null){ //if value is noll, use .delete
        searchParametersSegment.delete(key)
      } else {
        searchParametersSegment.set(key,value) //if there is value, add it to the string
      }
      return `?${searchParametersSegment.toString()}` //you must return something and convert it in the "?string" from
    }

      //This function will only modify the param with key "type" as per buttons

    const setNewSearchParamsSegment = (key, value) => {
      setSearchParams(prevParams => {
        if (value === null){
          prevParams.delete(key)
        } else {
          prevParams.set(key,value)
        }
        return prevParams
      })
    } 

  return (
  <main>
    <h1>Star wars characters</h1>
    <div>
      <Link to={generateNewSearchParamsSegment("type", "jedi")}>Jedis</Link>
      <Link to={generateNewSearchParamsSegment("type", "sith")}>Siths</Link>
      <Link to={generateNewSearchParamsSegment("type", null)}>Clear filters</Link>
    </div>
    <nav>
      <button onClick={() => setNewSearchParamsSegment("type", "jedi") }>Jedis </button>
      <button onClick={() => setNewSearchParamsSegment("type", "sith")}>Siths </button>
      <button onClick={() => setNewSearchParamsSegment("type", null)}>Clear filters</button>
    </nav>
    {characterEl}
  </main>
  );
};

{/* <button onClick={() => setSearchParams({type: "jedi"}) }>Jedis </button>
<button onClick={() => setSearchParams("?type=sith")}>Siths </button>
<button onClick={() => setSearchParams("type=animal")}>Animals</button>
<Link to=".">Clear search</Link> //It would also work with empty ""  meaning clear what is there */}

export default Characters;
