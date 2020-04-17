import React, { Component } from "react";
import LoginForm from "../components/loginForm/LoginForm";
import FooterLogin from "../components/loginForm/FooterLogin";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
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
  tablet: "640px",
  lgTablet: "740px",
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
  top: 5%;
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
  }

  .svg {
    vertical-align: bottom;
    margin-left: 1rem;
  }
`;
