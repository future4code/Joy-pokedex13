import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const PokemonCard = () => {
    
    //Variável que acessa as propriedades do history
    const history = useHistory()
    
    //Estilização
    const Card = styled.div`
        margin: 10px 0 20px;
        width: 220px;
        height: 210px;
        border-radius: 4px;
        background-color: #97b6e8;
        -webkit-box-shadow: -6px 8px 8px 0px rgba(25, 105, 78, 0.75);
        -moz-box-shadow: -6px 8px 8px 0px rgba(25, 105, 78, 0.75);
        box-shadow: -6px 8px 8px 0px rgba(25, 105, 78, 0.75);
    `

    const ButtonContainer = styled.div`
        display: flex;
        justify-content: space-between;
    `
    
    
    return(
        <Card>
            <figure>
                <img src="" alt="imagem do poke" />
            </figure>
            <ButtonContainer>
            <button>Adicionar a Pokédex</button>
            <button>Ver Detalhes</button>
            </ButtonContainer>

        </Card>
    )
}

export default PokemonCard