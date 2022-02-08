import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/Url";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    
    //é preciso pegar primeiro o nome dos pokemons para depois pegar as infos detalhadas
    const [pokeNames, setPokeNames] = useState([])
    //variável para guardar infromações do pokemon
    const [pokemons, setPokemons] = useState([])
    //várial de estado da pokedex sendo feita de forma global
    const [pokedex, setPokedex] = useState([])

    //variável para guardar todos os estados e passar para o value
    const states = {
        pokemons,
        pokedex
    }
    //variável para guardar todos os setters e passar para o value
    const setters = {
        setPokemons,
        setPokedex
    }

    //pegando os nomes
    const getPokeNames = () => {
        axios
          .get(`${BASE_URL}/pokemon?limit=20`)
          .then((res) => {
            setPokeNames(res.data.results)
          })
          .catch((error) => alert(error.message))
    }

    //assim que a página carregar solicitar os nomes
    useEffect(() => {
        getPokeNames();
    }, []);

    useEffect(() => {
        const List = []
        pokeNames && pokeNames.filter((poke) => {
            axios
            .get(`${BASE_URL}/pokemon/${poke.name}`)
            .then((res) => {
                List.push(res.data)
                setPokemons(List)
              }
            )
            .catch((error) => alert(error.message))
          })
    }, [pokeNames])

    return (
        <GlobalStateContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState