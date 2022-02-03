import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PokemonCard from "../components/PokemonCard"
import Header from "../components/Header"
import {goToHome} from "../routes/Coordinator"

const Pokedex = () => {
    
    //Variável que acessa as propriedades do history
    const history = useHistory()
    
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
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>

            </PokeContainer>
        </div>
    )
}

export default Pokedex