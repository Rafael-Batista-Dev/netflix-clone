import React from "react";
import Img from "../images/cancel.png";
import styled from "styled-components";
import { Button } from "./Button";
import { generateMedia } from "styled-media-query";

function TabContentDoor() {
  return (
    <TabContentContainer>
      <div className="container">
        <div className="tab-content">
          <div>
            <span className="title">
              <p style={{ textAlign: "justify" }}>
                A Netflix é flexível. Não há contratos nem compromissos. Você
                pode cancelar a sua conta na internet com apenas dois cliques.
                Não há taxa de cancelamento – você pode começar ou encerrar a
                sua assinatura a qualquer momento.
              </p>
            </span>
            <br />
            <Button className="btn-cancel" style={{ marginTop: "2rem" }}>
              Cancelar
            </Button>
          </div>
          <img src={Img} />
        </div>
      </div>
    </TabContentContainer>
  );
}

export default TabContentDoor;
// Styled Media Query
const customMedia = generateMedia({
  smDescktop: "1440px",
  tablet: "960px",
});

// Content Container
const TabContentContainer = styled.div`
  background: var(--main-deep-dark);

  .container {
    margin: 0 10%;
  }

  img {
    width: 31rem;
  }

  .title {
    margin-top: 2rem;
    ${customMedia.lessThan("smDesktop")`
      font-size: 1.5rem;
      line-height: 1;
    `}
  }

  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    font-size: 1.4rem;
    padding: 2.5rem;
    ${customMedia.lessThan("tablet")`
      grid-template-columns: 100%;
      text-aline: center;
      padding-left: 0;
      padding-right: 0;
  `}
  }

  .btn-cancel {
    margin: 0 1.25rem 1.25rem;
    grid-column: 10/12;
    font-size: 1rem;
    width: 10rem;
  }
`;
