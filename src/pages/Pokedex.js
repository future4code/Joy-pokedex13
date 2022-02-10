import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PokemonCard from "../components/PokemonCard"
import Header from "../components/Header"
import {goToHome} from "../routes/Coordinator"
import GlobalStateContext from "../global/GlobalStateContext";

const Pokedex = () => {
    
    //Variável que acessa as propriedades do history
    const history = useHistory()

    //Variáveis que trazem os dados da pokedex vindos do global state
    const { states } = useContext(GlobalStateContext)
    const { pokedex } = states
    
    //Estilização
    const PokeContainer = styled.main`
        display: grid;
        grid-template-columns: 200px 200px 200px 200px 200px;
        column-gap: 60px;
        margin-left: 110px;
    `
    
    return(
        <div>
            <Header
                pageName={"Pokédex"}
                buttonFunction={() => goToHome(history)}
            />
            <PokeContainer>
                {pokedex &&
                    pokedex.map((poke) => {
                    return <PokemonCard key={poke.name} poke={poke} isPokedex />;
                })}
            </PokeContainer>
        </div>
    )
}

export default Pokedex