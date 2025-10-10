import React from 'react'
import { useParams, Link } from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi", id: "1" },
  { name: "Darth Vader", type: "Sith", id: "2" },
  { name: "Emperor Palpatine", type: "Sith", id: "3" },
  { name: "Yoda", type: "Jedi", id: "4" },
  { name: "Krakana", type: "animal", id: "5" },
];

const IndividualCharacter = () => {
    const lastSegment = useParams()
    console.log(lastSegment)

  return (
    <div>
      individual
    </div>
  )
}

export default IndividualCharacter
