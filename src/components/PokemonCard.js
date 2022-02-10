import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {goToPokeDetail} from "../routes/Coordinator";
import bg from "../img/pokebola.png";
import GlobalStateContext from "../global/GlobalStateContext";

const PokemonCard = (props) => {
    
    //Variável que acessa as propriedades do history
    const history = useHistory()

    const { states, setters } = useContext(GlobalStateContext)
    const { pokemons, pokedex } = states
    const { setPokemons, setPokedex } = setters
    
    //função para adicionar os pokemons na pokedex
    const addToPokedex = () => {
        const pokeIndex = pokemons.findIndex((poke) => 
            poke.name === props.poke.name
        )

        const newPokemons = [...pokemons]
        newPokemons.splice(pokeIndex, 1)

        const newPokedex = [...pokedex, props.poke]

        setPokemons(newPokemons)
        setPokedex(newPokedex)
    }

    //função para remover
    const removeFromPokedex = () => {
        const pokeIndex = pokedex.findIndex((poke) => 
            poke.name === props.poke.name
        )
    
        const newPokedex = [...pokedex]
        newPokedex.splice(pokeIndex, 1)
    
        const newPokemons = [...pokemons, props.poke]
    
        setPokedex(newPokedex)
        setPokemons(newPokemons)
      }

    //Estilização
    const Card = styled.div`
        margin: 10px 0 20px;
        width: 220px;
        height: 210px;
        border-radius: 8px;
    `

    const ButtonContainer = styled.div`
        display: flex;
        justify-content: space-around;

        button {
            background-color: #f25058;
            border-radius: 20px;
            height: 7vh;
            border: none;
            color: white;

            &:hover{
                background-color: #8a4e55;
                cursor: pointer;
            }
        }
        .b1{
            width: 42%;
        }

        .b2{
            width: 42%;
        }
    `

    const Figure = styled.figure`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70%;
        background: Url(${bg});
        background-repeat: no-repeat;
        background-position: relative;
        img {
             height: 90%;
             width: 90%;
         }
    `
    
    return(
        <Card>
            <Figure>
                <img           
                    src={props.poke && props.poke.sprites.front_default}
                    alt={props.poke.name} 
                />
            </Figure>
            <ButtonContainer>
            <button onClick={props.isPokedex ? removeFromPokedex : addToPokedex} className="b1">
                {props.isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
            </button>
            <button onClick={() => goToPokeDetail(history, props.poke.name)} className="b2">Ver Detalhes</button>
            </ButtonContainer>
        </Card>
    )
}

export default PokemonCard