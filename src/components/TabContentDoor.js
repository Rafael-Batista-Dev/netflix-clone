import React from "react";
import Img from "../images/cancel.png";
import styled from "styled-components";
import { Button } from "./Button";

function TabContentDoor() {
  return (
    <TabContentContainer>
      <div className="container">
        <div className="tab-content">
          <div>
            <span>
              <p style={{ textAlign: "justify" }}>
                A Netflix é flexível. Não há contratos nem compromissos. Você
                pode cancelar a sua conta na internet com apenas dois cliques.
                Não há taxa de cancelamento – você pode começar ou encerrar a
                sua assinatura a qualquer momento.
              </p>
            </span>
            <br />
            <Button style={{ marginTop: "2rem" }}>Cancelar</Button>
          </div>
          <img src={Img} />
        </div>
      </div>
    </TabContentContainer>
  );
}

export default TabContentDoor;

// Content Container
const TabContentContainer = styled.div`
  background: var(--main-deep-dark);

  .container {
    margin: 0 10%;
  }

  img {
    width: 31.875rem;
  }

  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    font-size: 2rem;
    padding: 2.5rem;
  }
`;
