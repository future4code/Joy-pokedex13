import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header"
import {goToPokedex} from "../routes/Coordinator"

const PokeDetail = () => {
    
    //Variável que acessa as propriedades do history
    const history = useHistory()
    
    //Estilização
    const InfosFrame = styled.main`
        display: flex;
        justify-content: space-evenly;
        height: 80vh;
        margin: 30px 13vw;
        color: white;

        h2 {
            align-self: center;
        }
    `;
    
    const ImagesContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-self: center;
        height: 70%;
        justify-content: space-between;
    `;

    const Img = styled.img`
        height: 20vh;
        background-color: #aad9f0;
    `;

    const PowersContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: #aad9f0;
        align-self: center;
        height: 72%;
        width: 320px;
        padding-left: 20px;
    `;
    
    const RightFrame = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-self: center;
        height: 72%;
        width: 300px;
    `;

    const TypesContainer = styled.div`
        display: flex;
        justify-content: space-around;
        background-color: #aad9f0;
        height: 15%;
    `;

    const MovesContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: #aad9f0;
        padding-left: 20px;
        height: 80%;
    `;

    return(
        <div>
            <Header
                buttonFunction={() => goToPokedex(history)}
            />

            <InfosFrame>
                <ImagesContainer>
                    <Img src="" alt="img poke" />
                    <Img src="" alt="img poke" />
                </ImagesContainer>

                <PowersContainer>
                    <h2>Stats</h2>

                </PowersContainer>

                <RightFrame>
                    <TypesContainer>

                    </TypesContainer>

                    <MovesContainer>
                        <h2>Main Attacks</h2>

                    </MovesContainer>
                </RightFrame>

            </InfosFrame>

        </div>
    )
}

export default PokeDetail