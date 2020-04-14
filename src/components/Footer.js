import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";
import { generateMedia } from "styled-media-query";

class Footer extends Component {
  state = {
    langContent: false,
  };

  handleToggle = (e) => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent,
    });
  };
  render() {
    return (
      <FooterContainer>
        <span
          style={{
            marginLeft: "15%",
            fontSize: "1.123rem",
          }}
        >
          Dúvidas? Entre em contato.
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link>Perguntas frequentes</Link>
            </li>
            <li>
              <Link>Relações com investidores</Link>
            </li>
            <li>
              <Link>Formas de assistir</Link>
            </li>
            <li>
              <Link>Informações corporativas</Link>
            </li>
            <li>
              <Link>Originais Netflix</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>Centro de ajuda</Link>
            </li>
            <li>
              <Link>Carreiras</Link>
            </li>
            <li>
              <Link>Termos de uso</Link>
            </li>
            <li>
              <Link>Entre em contato</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>Conta</Link>
            </li>
            <li>
              <Link>Resgatar cartão pré-pago</Link>
            </li>
            <li>
              <Link>Privacidade</Link>
            </li>
            <li>
              <Link>Teste de velocidade</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>Imprensa</Link>
            </li>
            <li>
              <Link>Comprar cartão pré-pago</Link>
            </li>
            <li>
              <Link>Preferências de cookies</Link>
            </li>
            <li>
              <Link>Avisos legais</Link>
            </li>
          </ul>
          {/* Language Button */}
          <div className="lang-btn" onClick={this.handleToggle}>
            <Icon icon={iosWorld} size={20} />
            &nbsp;&nbsp;Pt-br
            <Icon icon={arrowSortedDown} size={20} />
          </div>
        </div>
        {/* Toggle Language */}
        {this.state.langContent && (
          <div className="lang-toggle">
            <ul>
              <li>Português</li>
            </ul>
            <ul>
              <li>English</li>
            </ul>
          </div>
        )}
        <span
          className="footer-copy"
          style={{ marginLeft: "40%", fontSize: "0.9rem" }}
        >
          &copy;&nbsp;Netflix Brasil - Todos od Direitos Reservados
        </span>
      </FooterContainer>
    );
  }
}

export default Footer;

// Styled Media Query
const customMedia = generateMedia({
  tablet: "740px",
});

const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  padding-top: 5rem;
  padding-bottom: 3rem;
  color: #999;

  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${customMedia.lessThan("tablet")`
    grid-template-columns: repeat(2, 1fr);
  `}
  }

  .footer-copy {
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: #999;
  }

  a {
    color: #999;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  ul li {
    list-style: none;
    line-height: 2.5;
  }

  .lang-btn {
    margin: 2rem 0 2rem;
    background: transparent;
    border-radius: 4px;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8rem;
    cursor: pointer;
  }

  //Toggle Langue
  .lang-toggle {
    margin-left: 15%;
    position: absolute;
    margin-top: -2rem;
  }

  .lang-toggle ul {
    background: var(main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    border-radius: 4px;
    text-align: center;
    &:hover {
      background: var(--main-red-hover);
      color: #fff;
    }
  }
`;
