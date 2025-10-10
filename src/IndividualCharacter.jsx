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
    const lastSegment = useParams() // {id: '1'}

    const theIndividualCharacter = swCharacters.find(oneObj => oneObj.id === lastSegment.id) //find has only one truthy match, the first one and it looks at a specific property as a source of truth but returns the whole object, you can look at source of truth in any way
    console.log(theIndividualCharacter)

    const [searchParams, setSearchParams] = useSearchParams()
    const searchFilters = "?" + searchParams.toString() //searchParams are all search params without ?

  return (
    <>
        <Link to={`..${searchFilters}`} path="relative">&larr; Go back to previous filter</Link> {/* artificially adding search filters after the last param to the URL* path="relative" is to ensure you go to the nearest last segment and not nearest parent in family tree*/}
        <div>
            <p style={{color: theIndividualCharacter.type === "Jedi" ? "blue" : theIndividualCharacter.type === "Sith" ? "red" : "purple"}}>name: {theIndividualCharacter.name}</p>
            <p>{theIndividualCharacter.type}</p>
        </div>
    </>
  )
}

export default IndividualCharacter
