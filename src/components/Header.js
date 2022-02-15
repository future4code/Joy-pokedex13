import React from "react";
import styled from "styled-components";
import bg from "../img/pokebola.png";

const Header = ({buttonFunction, pageName}) => {

    //Estilização
    const Header = styled.header`
        height: 15vh;
        background-color: #fc778f;
        display: flex;
        align-items: center;
        color: white;
        position: relative;

        h1 {
          margin-left: 38vw;
          
        }

        img {
          margin-left: 40vw;
          height: 10vh;
          width: 5vw;
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
        case "PokeLista":
          return "Pokédex";
        case "Pokédex":
          return "PokeLista";
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
        <img src={bg} alt="" />
      </Header>
    )
  }
  
  export default Header
  