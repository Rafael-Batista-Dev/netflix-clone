import React, { Component } from "react";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";

class FooterSelectPlan extends Component {
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
          <p>Netflix Brasil - Todos os Direitos Reservados</p>
        </span>
      </FooterContainer>
    );
  }
}

export default FooterSelectPlan;

// Styled Media Query
const customMedia = generateMedia({
  tablet: "640px",
});

const FooterContainer = styled.footer`
  margin-top: 3.5rem;
  background: var(--main-deep-dark);
  color: #999;
  ${customMedia.lessThan("tablet")`
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
