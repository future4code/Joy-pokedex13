import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Header = () => {

    //Variável que acessa as propriedades do history
    const history = useHistory()

    //Estilização
    const Header = styled.header`
        height: 10vh;
        background-color: #f25058;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        position: relative;
    `
    
    const Button = styled.button`
        margin: 0 10px 0 10px;
        background-color: #a3d3e3;
        border-radius: 10px;
        border: none;
        height: 5vh;
        color: white;

        &:hover{
            background-color: #6f94a1;
            cursor: pointer;
        }
    `
  
    return (
      <Header>
        <Button>
          botão esquerda
        </Button>
        <h1>Titúlo da Página</h1>
        <Button>
          botão direito
        </Button>
      </Header>
    )
  }
  
  export default Header
  