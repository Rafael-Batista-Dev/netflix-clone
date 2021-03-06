import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Icon } from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import { checkmark } from "react-icons-kit/icomoon/checkmark";
import { generateMedia } from "styled-media-query";

function TabContentPrices() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span>Escolha um dos nosso planos.</span>
          <Link to="/planos">
            <Button className="btn-to">Experimente agora!</Button>
          </Link>
        </div>
        {/* Tab content table */}
        <div className="tab-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Básico</th>
                <th>Padrão</th>
                <th>Prêmio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Por Mês</td>
                <td>$9.99</td>
                <td>$13.99</td>
                <td>$16.99</td>
              </tr>
              <tr>
                <td>Avaliação em HD</td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Avaliação em Ultra HD</td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Telas nas quais você pode assistir ao mesmo tempo</td>
                <td>1</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Você pode assistir em laptop, Tv, phone, end tablet</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Filmes ilimitados</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Cancele a qualquer momento</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <br />
      </div>
    </TabContainer>
  );
}

export default TabContentPrices;

// Styled Media Query
const customMedia = generateMedia({
  lgDescktop: "1350px",
  mdDescktop: "1000px",
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
    ${customMedia.lessThan("lgDescktop")`
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    text-align: center;
  `}
  }

  span {
    grid-column: 1/8;
    ${customMedia.lessThan("lgDescktop")`
    grid-column: 1/-1;
    font-size: 1.4rem;
  `}
  }

  .btn-to {
    margin: 0 1.25rem 1.25rem;
    margin-right: -30rem;
    grid-column: 10/12;
    font-size: 1rem;
    ${customMedia.lessThan("mdDescktop")`
    grid-column: 1/-1;
    margin-left: -30rem;
    width: 15rem;
  `}
  }

  // Tab Bottom Content
  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
  }

  h3 {
    margin: 0.5rem;
  }

  p {
    color: var(--main-grey);
  }

  .tab-table {
    margin: 2rem auto;

    margin-bottom: 2rem;
  }

  table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
  }

  table thead th {
    text-transform: uppercase;
    padding: 0.8rem;
  }

  table tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }

  table tbody tr td {
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;
  }

  table tbody tr td:first-child {
    text-align: left;
  }

  table tbody tr:nth-child(even) {
    background: #222;
  }
`;
