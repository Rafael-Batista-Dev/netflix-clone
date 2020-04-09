import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import ImgTv from "../images/tv.png";
import ImgTablet from "../images/tablet.png";
import ImgMacbook from "../images/macbook.png";

// import { Container } from './styles';

function TabContentDevices() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span>
            Assista no celular, tablet, smart TV ou notebook sem pagar a mais
            por isso.
          </span>
          <Button className="btn-to">Experimente agora!</Button>
        </div>
        {/* Bottom content */}
        <div className="tab-bottom-content">
          <div className="devices">
            <img style={{ width: "18rem" }} src={ImgTv} alt="tv" />
            <h3>Aproveite na TV.</h3>
            <p>
              Assista em TVs, PlayStation, Xbox, Chromecast e outros aparelhos.
            </p>
          </div>
          <div className="devices">
            <img
              style={{ width: "18rem", marginTop: "0.7rem" }}
              src={ImgTablet}
              alt="tv"
            />
            <h3>Assista em qualquer lugar.</h3>
            <p>Baixe suas séries e filmes favoritos e assista offline</p>
          </div>

          <div className="devices">
            <img
              style={{
                width: "20rem",
              }}
              src={ImgMacbook}
              alt="tv"
            />
            <h3>Assista quando quiser.</h3>
            <p>
              Assista no netbook, notebook ou macbook sem pagar a mais por isso.
            </p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}

export default TabContentDevices;

// Tab Content Container

const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2rem;
    align-items: center;
    font-size: 2rem;
    padding: 2.5rem 0;
  }

  span {
    grid-column: 1/8;
  }

  .btn-to {
    grid-column: 10/12;
    font-size: 1rem;
    width: 15rem;
  }

  // Tab Bottom Content
  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
  }

  .devices {
    margin-bottom: 2rem;
  }

  h3 {
    margin: 0.5rem;
  }

  p {
    color: var(--main-grey);
  }
`;
