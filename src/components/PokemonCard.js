import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {goToPokeDetail} from "../routes/Coordinator"

const PokemonCard = (props) => {
    
    //Variável que acessa as propriedades do history
    const history = useHistory()
    
    //Estilização
    const Card = styled.div`
        margin: 10px 0 20px;
        width: 220px;
        height: 210px;
        border-radius: 8px;
        background-color: #aad9f0;
        -webkit-box-shadow: -6px 8px 8px 0px rgba(126, 170, 191, 0.75);
        -moz-box-shadow: -6px 8px 8px 0px rgba(126, 170, 191, 0.75);
        box-shadow: -6px 8px 8px 0px rgba(126, 170, 191, 0.75);
    `

    const ButtonContainer = styled.div`
        display: flex;
        margin-top: 25px;

        button {
            background-color: #f25058;
            border-radius: 20px;

            color: white;

            &:hover{
                background-color: #8a4e55;
                cursor: pointer;
            }
        }
        .b1{
            width: 50%;
        }

        .b2{
            width: 50%;
        }
    `

    const Figure = styled.figure`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60%;
        
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
                    alt={"imagem do pokemon"} 
                />
            </Figure>
            <ButtonContainer>
            <button className="b1">Adicionar a Pokédex</button>
            <button onClick={() => goToPokeDetail(history)} className="b2">Ver Detalhes</button>
            </ButtonContainer>

        </Card>
    )
}

export default PokemonCard