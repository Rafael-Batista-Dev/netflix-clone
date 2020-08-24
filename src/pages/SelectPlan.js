import React from "react";
import styled from "styled-components";
import logo from "../svg/logo.svg";
import { Button } from "../components/Button";
import checkmarkLogo from "../images/Checkmark.png";
import { Link, NavLink } from "react-router-dom";
import FooterSelectPlan from "../components/FooterSelectPlan";
import { generateMedia } from "styled-media-query";

const SelectPlan = () => {
  return (
    <MainContainer>
      <div className="header-top">
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <NavLink to="/login" className="btn-singIn">
          Assinar
        </NavLink>
      </div>

      <div className="header-content">
        <img className="checkemark-logo" src={checkmarkLogo} alt="checkemark" />
        <p>
          Passo <strong>1</strong> de <strong>3</strong>
        </p>
        <h2>Escolha seu Plano.</h2>
        <div className="checked-list">
          <div className="bullet">Cancele a qual quer momento</div>
          <div className="bullet">Plano deacordo com seu bolso</div>
          <div className="bullet">Em todos os dispositivo</div>
        </div>
        <Button>veja os planos</Button>
      </div>
      <FooterSelectPlan />
    </MainContainer>
  );
};

export default SelectPlan;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
});

const MainContainer = styled.div`
  background: #ffffff;
  //header top
  .header-top {
    background: #ffffff;
    height: 6rem;
    border-bottom: 1px solid #6e6e6e;
  }

  //header content
  .header-content {
    display: grid;
    justify-content: center;
    background: #ffffff;
    color: var(--main-dark);
    margin-bottom: 3rem;
    width: 65%;
    position: relative;
    margin: auto;
    margin-top: 3rem;
    text-align: center;
    aline-content: center;
    flex-derection: column;
    z-index: 2;
  }

  .header-content img {
    margin: 6.25rem auto 1.875rem;
  }

  .header-content p {
    margin-bottom: 0.5rem;
  }

  // Checked List
  .checked-list {
    text-align: left;
    margin: 1rem auto 3rem;
    padding-left: 1.5rem;
    width: 75%;
    font-size: 17px;
    padding: auto;
  }

  //Bullet
  .bullet {
    margin-top: 1rem;
    margin-left: 1rem;
    text-indent: -1rem;
    line-height: 1.2rem;
  }

  .checked-list .bullet::before {
    color: transparent;
    display: inline-block;
    position: relative;
    height: 0.3rem;
    width: 0.8rem;
    content: "";
    left: -0.9375rem;
    bottom: 0.1875rem;
    border-bottom: 1px solid #e50914;
    border-left: 1px solid #e50914;
    transform: rotate(-45deg);
  }

  // Checkmark Logo
  .checkemark-logo {
    width: 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  // Btn SingIn
  .btn-singIn {
    margin: 1.6rem 4% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 700;
    line-height: normal;
    color: var(--main-dark);
    font-size: 1.2rem;
    right: 0;
    position: absolute;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

//Logo
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
