import React, { Component } from "react";
import logo from "../svg/logo.svg";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";

class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
        <div
          className="header-top{position: relative;height: 10rem;     
          }"
        >
          <Logo src={logo} alt="logo" />
          <NavLink to="/login" className="signIn-btn">
            Entrar
          </NavLink>
        </div>
        {/* Header Content */}
        <div className="header-content">
          <Title>Filmes, séries e muito mais.</Title>
          <Title>Sem limites.</Title>
          <SubTitle>Assista onde quiser. Cancele quando quiser.</SubTitle>
          <input
            className="input-email"
            style={{ color: "#363636" }}
            type="email"
            placeholder="Email"
          />
          <Button className="offer-btn">
            Assine a nexflix
            <Icon className="svg" icon={ic_keyboard_arrow_right} size={30} />
          </Button>
          <SubSubTitle>
            Pronto para assistir? Informe seu email para criar ou acessar sua
            conta.
          </SubSubTitle>
        </div>
      </HeaderComponent>
    );
  }
}
export default Header;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
});

// Logo

const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 7%;
  left: 10%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  ${customMedia.lessThan("tablet")`
  left: 20%;
  `}
`;

// Header Conteiner

const HeaderComponent = styled.div`
  .signIn-btn {
    right: 0;
    margin: 1.88rem 5% 0;
    padding: 0.5rem 1.02rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1.2rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: var(--main-red-hover);
    }

    ${customMedia.lessThan("smTablet")`
    margin-top: 1.25rem;
    right: 5%;
    `}
  }

  //Header Top
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 1;
  }

  //Header Content
  .header-content {
    top: 35%;
    position: relative;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: colum;
    z-index: 1;
    ${customMedia.lessThan("smTablet")`
    display: grid;
    grid-template-rows: repeat(3, 60px);
    `}
  }

  .svg {
    vertical-align: bottom;
    margin-left: 1rem;
    ${customMedia.lessThan("smTablet")`
      display: none;
    `}
  }

  // Main Input Email
  .input-email {
    width: 35rem;
    border: none;
    padding: 1rem;
    font-size: 1.7rem;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    transsition: background 0.2s ease-in;
    ${customMedia.lessThan("lgDesktop")`
    margin:  0 1rem 1rem 1rem;
    max-width: 400px;
      margin-left: 15%;
    font-size: 1.5rem;
    `}

    ${customMedia.lessThan("mdDesktop")`
    margin:  0 1rem 1rem 1rem;
    max-width: 400px;
      margin-left: 15%;
    font-size: 1.5rem;
    `}

    ${customMedia.lessThan("tablet")`
    margin:  0 1rem 1rem 1rem;
    max-width: 400px;
      margin-left: 15%;
    font-size: 1.2rem;
    `}
  }

  .offer-btn{
    ${customMedia.lessThan("lgDesktop")`
          margin-left: 15%;
    font-size: 1.5rem;
    `}

    ${customMedia.lessThan("mdDesktop")`
          margin-left: 15%;
    font-size: 1.5rem;
    `}

    ${customMedia.lessThan("tablet")`
          margin-left: 15%;
    font-size: 1.2rem;
    `}
  }
`;

// Main Title
const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1em;
  ${customMedia.lessThan("tablet")`
    font-size: 2.6rem;
    `}
`;

// Main SubTitle
const SubTitle = styled.h3`
  margin: 1.4rem;
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 1.25em;
  ${customMedia.lessThan("smTablet")`
    margin:  0;
    font-size: 1.4rem;
    `}
`;

// Main SubSubTitle
const SubSubTitle = styled.h3`
  margin: 1rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.25em;
  ${customMedia.lessThan("smTablet")`
    margin:  0 ;
    margin-top: 1rem;
    font-size: 1.2rem;
    `}
`;
