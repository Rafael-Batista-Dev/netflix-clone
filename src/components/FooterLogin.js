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
          className="footer-copy"
          style={{ marginLeft: "40%", fontSize: "0.9rem" }}
        >
          <p>Netflix Brasil - Todos od Direitos Reservados</p>
        </span>
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
  margin-top: 3.5rem;
  background: var(--main-deep-dark);
  opacity: 0.75;
  -moz-opacity: 0.75;
  filter: alpha(opacity=75);
  padding-top: 0.9rem;
  color: #999;
  ${customMedia.lessThan("tablet")`
  margin-top: 1.5rem;
`}

  .footer-copy {
    width: 70%;
    margin: auto;
    font-size: 0.9rem;
    overflow: auto;
    color: #999;
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
  }
`;
