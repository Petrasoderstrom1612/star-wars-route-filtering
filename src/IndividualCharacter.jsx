import React from 'react'
import {  Link, useParams, useSearchParams } from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi", id: "1" },
  { name: "Darth Vader", type: "Sith", id: "2" },
  { name: "Emperor Palpatine", type: "Sith", id: "3" },
  { name: "Yoda", type: "Jedi", id: "4" },
  { name: "Krakana", type: "animal", id: "5" },
];

const IndividualCharacter = () => {
    const lastSegment = useParams()
    console.log(lastSegment) // {id: '1'}

    const theIndividualCharacter = swCharacters.find(oneObj => oneObj.id === lastSegment.id)
    console.log(theIndividualCharacter)

    const [searchParams, setSearchParams] = useSearchParams()
    const searchFilters = "?" + searchParams.toString()

  return (
    <>
        <Link to={`..${searchFilters}`} path="relative">&larr; Go back to previous filter</Link>
        <div>
            <p style={{color: theIndividualCharacter.type === "Jedi" ? "blue" : theIndividualCharacter.type === "Sith" ? "red" : "purple"}}>name: {theIndividualCharacter.name}</p>
            <p>{theIndividualCharacter.type}</p>
        </div>
    </>
  )
}

export default IndividualCharacter
