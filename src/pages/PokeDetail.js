import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header"
import {goToPokedex} from "../routes/Coordinator"
import axios from "axios";
import { BASE_URL } from "../constants/Url";
import bg from "../img/pokebola.png";

const PokeDetail = () => {
    
    //Variável que acessa as propriedades do history
    const history = useHistory()

    //váriavel para guardar dados do pokemon selecionado
    const [selectedPoke, setSelectedPoke] = useState({});
    const { name } = useParams();

    //função para pegar dados do pokemon via API 
    useEffect(() => {
        axios
        .get(`${BASE_URL}/pokemon/${name}`)
        .then((res) => setSelectedPoke(res.data))
        .catch((err)=> console.log(err.response.message))
    }, [])

    console.log(selectedPoke)
    
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
        background: Url(${bg});
        background-repeat: no-repeat;
        background-position: relative;
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
        border-radius: 10px;
        -webkit-box-shadow: 5px 5px 5px 0px rgba(151, 178, 222, 0.75);
        -moz-box-shadow: 5px 5px 5px 0px rgba(151, 178, 222, 0.75);
        box-shadow: 5px 5px 5px 0px rgba(151, 178, 222, 0.75);
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
        height: 15%;
        
        button {
            border-radius: 15px;
            height: 5vh;
            border: none;
            color: white;
            width: 45%;
            background-color: #86eb7c;
            font-size: 100%;
        }
    `;

    const MovesContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: #aad9f0;
        padding-left: 20px;
        height: 90%;
        border-radius: 10px;
        -webkit-box-shadow: 5px 5px 5px 0px rgba(151, 178, 222, 0.75);
        -moz-box-shadow: 5px 5px 5px 0px rgba(151, 178, 222, 0.75);
        box-shadow: 5px 5px 5px 0px rgba(151, 178, 222, 0.75);
    `;

    return(
        <div>
            <Header
                pageName={selectedPoke.name}
                buttonFunction={() => goToPokedex(history)}
            />

            {selectedPoke && selectedPoke.sprites && (
                <InfosFrame>
                    <ImagesContainer>
                        <Img src={selectedPoke.sprites.front_default} alt="img poke" />
                        <Img src={selectedPoke.sprites.back_default} alt="img poke" />
                    </ImagesContainer>

                    <PowersContainer>
                        <h2>Stats</h2>
                        {selectedPoke && selectedPoke.stats.map((stats) => {
                            return (
                                <p key={stats.stat.name}>
                                <strong>{stats.stat.name}: </strong>
                                {stats.base_stat}
                                </p>
                            )
                        })}

                    </PowersContainer>

                    <RightFrame>
                        <TypesContainer>
                            {selectedPoke && selectedPoke.types.map((types) => {
                                return <button key={types.type.name}> 
                                         {types.type.name}</button>;
                            })}

                        </TypesContainer>

                        <MovesContainer>
                            <h2>Main Attacks</h2>
                            {selectedPoke && selectedPoke.moves.map((attacks, index) => {
                            return (
                                index < 5 && <p key={attacks.move.name}> 
                                                {attacks.move.name}</p>
                            )
                            })}
                        </MovesContainer>
                    </RightFrame>
                </InfosFrame>
            )}

        </div>
    )
}

export default PokeDetail