import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <span
          style={{
            marginLeft: "14.9%",
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
          <div className="lang-btn">
            <Icon icon={iosWorld} size={30} />
            Pt-br
            <Icon icon={arrowSortedDown} size={30} />
          </div>
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;

const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #999;

  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
    margin-top: 20px;
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8rem;
  }
`;
