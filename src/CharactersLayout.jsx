import { Outlet } from "react-router-dom";

const CharactersLayout = () => {
const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi", id: "1", body: "tall" },
  { name: "Darth Vader", type: "Sith", id: "2" },
  { name: "Emperor Palpatine", type: "Sith", id: "3" },
  { name: "Yoda", type: "Jedi", id: "4" },
  { name: "Krakana", type: "animal", id: "5" },
  { name: "Luke Taller", type: "Jedi", id: "6", body: "tall"},
];

  return (
    // Passing state via context
    <Outlet context={{ swCharacters }} />
  );
};

export default CharactersLayout;

