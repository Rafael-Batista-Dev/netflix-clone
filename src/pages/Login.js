import React, { Component } from "react";
import LoginForm from "../components/loginForm/LoginForm";
import FooterLogin from "../components/FooterLogin";
import logo from "../svg/logo.svg";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";

class Login extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
        <div
          className="header-top{position: relative;height: 10rem;     
          }"
        >
          <Logo src={logo} alt="logo" />
        </div>
        {/* Header Content */}
        <div className="header-content">
          <LoginForm />
          <FooterLogin />
        </div>
      </HeaderComponent>
    );
  }
}
export default Login;

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
    margin: auto;
    top: 32%;
    position: relative;
    justify-content: center;
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
