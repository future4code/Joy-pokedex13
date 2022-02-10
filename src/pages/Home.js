import React, { useContext} from "react";
import Header from "../components/Header"
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PokemonCard from "../components/PokemonCard"
import {goToPokedex} from "../routes/Coordinator"
import GlobalStateContext from "../global/GlobalStateContext";

const Home = () => {

    //Variável que acessa as propriedades do history
    const history = useHistory()
    
    //Variáveis que trazem os dados dos pokemon vindos do global state
    const { states } = useContext(GlobalStateContext)
    const { pokemons } = states

    //Estilização
    const PokeContainer = styled.main`
        display: grid;
        grid-template-columns: 200px 200px 200px 200px 200px;
        column-gap: 60px;
        margin-left: 110px;
    `

    console.log(pokemons)
    return(
        <div>
            <Header
                pageName={"PokeLista"}
                buttonFunction={() => goToPokedex(history)}
            />
            
            <PokeContainer>
                {pokemons && pokemons.map((poke) => {
                    return <PokemonCard key={poke.name} poke={poke} />
                })}
            </PokeContainer>
        </div>
    )
}

export default Home;
