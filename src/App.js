// import React, { useEffect, useState } from "react";
import './App.css';
import Router from './routes/Router';
import GlobalState from "./global/GlobalState"
// import axios from "axios";
// import { BASE_URL } from "./constants/Url";

function App() {
//   const [pokeNames, setPokeNames] = useState([]);
//   const [pokemons, setPokemons] = useState([]);
//   const getPokeNames = () => {
//     axios
//       .get(`${BASE_URL}/pokemon?limit=20`)
//       .then((res) => {
//         setPokeNames(res.data.results)
//       })
//       .catch((error) => alert(error.message))
// }

// useEffect(() => {
//   getPokeNames();
// }, []);

// useEffect(() => {
//   pokeNames.map((poke) => {
//       axios
//       .get(`${BASE_URL}/pokemon/${poke.name}`)
//       .then((res) => {
//           setPokemons(res.data)
//         }
//       )
//       .catch((error) => alert(error.message))
//     })
// }, [pokeNames])

// console.log(pokemons)
  return (
    <div className="App">
      <GlobalState>
      <Router></Router>
      </GlobalState>
    </div>
  );
}

export default App;
