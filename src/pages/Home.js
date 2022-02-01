import React from "react";
import Header from "../components/Header"
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Home = () => {

    //Variável que acessa as propriedades do history
    const history = useHistory()

    //Estilização
    const PokeContainer = styled.main`
        width: 100vw;
        height: 92vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    `

    return(
        <div>
            <Header></Header>
            
            <PokeContainer>

            </PokeContainer>
        </div>
    )
}

export default Home;
