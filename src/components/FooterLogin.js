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
          Duvidas? Entre em contato.
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link>Termos dos Cartões pré-pagos</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>Termos de uso</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>Declaração de privacidade</Link>
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
      </FooterContainer>
    );
  }
}

export default Footer;

// Styled Media Query
const customMedia = generateMedia({
  tablet: "640px",
});

const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  opacity: 0.75;
  -moz-opacity: 0.75;
  filter: alpha(opacity=75);
  padding-top: 0.9rem;
  color: #999;

  .footer-columns {
    width: 70%;
    margin: auto;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    ${customMedia.lessThan("tablet")`
    grid-template-columns: repeat(1, 1fr);
  `}
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
    margin: 1rem 0 1rem;
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
