import React, { Component } from "react";
import logo from "../svg/logo.svg";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
        <div
          className="header-top{position: relative;height: 10rem;     
          }"
        >
          <Logo src={logo} alt="logo" />
          <NavLink to="/" className="signIn-btn">
            Entrar
          </NavLink>
        </div>
        {/* Header Content */}
        <div className="header-content">
          <Title>Filmes, séries e muito mais.</Title>
          <Title>Sem limites.</Title>
          <SubTitle>Assista onde quiser. Cancele quando quiser.</SubTitle>
          <input className="input-email" placeholder="Email" type="email" />
          <Link className="offer-btn">Assine a nexflix</Link>
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

// Logo

const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 8%;
  left: 10%;
  transform: translate(-50%, -50%);
`;

// Header Conteiner

const HeaderComponent = styled.div`
  .signIn-btn {
    right: 0;
    margin: 1.88rem 5% 0;
    padding: 0.4375rem 1.0625rem;
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
  }

  // Main Offer button
  .offer-btn {
    width: 25rem;
    display: inline-block;
    background: var(--main-red);
    text-transform: uppercase;
    border: none;
    outline: none;
    padding: 1rem;
    border-radius: 0.1875rem;
    font-size: 1.7rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    transsition: background 0.2s ease-in;
    cursor: pointer;
    &:hover {
      background: var(--main-red-hover);
    }
  }

  // Main Input Email
  .input-email {
    width: 35rem;
    border: none;
    padding: 1rem;
    font-size: 1.7rem;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    transsition: background 0.2s ease-in;
  }
`;

// Main Title
const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1em;
`;

// Main SubTitle
const SubTitle = styled.h3`
  margin: 1.4rem;
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 1.25em;
`;

// Main SubSubTitle
const SubSubTitle = styled.h3`
  margin: 1rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.25em;
`;
