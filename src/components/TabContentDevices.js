import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import ImgTv from "../images/tv.png";
import ImgTablet from "../images/tablet.png";
import ImgMacbook from "../images/macbook.png";
import { generateMedia } from "styled-media-query";

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

// Styled Media Query
const customMedia = generateMedia({
  smDescktop: "1440px",
  tablet: "900px",
});

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
    ${customMedia.lessThan("smDesktop")`
    grid-template-columns: repeat(2, 1fr);
    line-height: 1;
  `}

    ${customMedia.lessThan("tablet")`
    grid-template-columns: 1fr;
    text-align: center;
    row-gap: 1.5rem;
  `}
  }

  span {
    grid-column: 1/8;
    ${customMedia.lessThan("tablet")`
    grid-column: 1/-1;
    font-size: 1.5rem
  `}
  }

  .btn-to {
    margin: 0 1.25rem 1.25rem;
    grid-column: 10/12;
    font-size: 1rem;
    ${customMedia.lessThan("tablet")`
    grid-column: 1/-1;
    margin-left: 30%
    margin-right: 30%
  `}
  }

  // Tab Bottom Content
  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-top: 2rem;
    text-align: center;
    ${customMedia.lessThan("tablet")`
    grid-template-columns: 1fr;

  `}
  }

  .devices {
    margin-bottom: 2rem;
  }

  .title {
    margin-top: 2rem;
    ${customMedia.lessThan("smDesktop")`
      font-size: 1.5rem;
      line-height: 1;
    `}
  }

  h3 {
    margin: 0.5rem;
  }

  p {
    color: var(--main-grey);
  }
`;
