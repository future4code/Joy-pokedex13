import React from "react";
import styled from "styled-components";

const Header = ({buttonFunction, pageName}) => {

    //Estilização
    const Header = styled.header`
        height: 10vh;
        background-color: #f25058;
        display: flex;
        align-items: center;
        color: white;
        position: relative;

        h1 {
          margin-left: 34vw;
          
        }
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
    const ButtonText = () => {
      switch (pageName) {
        case "Lista de Pokémons":
          return "Pokédex";
        case "Pokédex":
          return "Lista de pokémons";
        default:
          return "Voltar";
      }
    };
  
    return (
      <Header>
        <Button onClick={buttonFunction}>
          {ButtonText()}
        </Button>
        <h1>{pageName}</h1>
      </Header>
    )
  }
  
  export default Header
  