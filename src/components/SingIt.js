import React, { Component } from "react";
import { Button } from "./Button";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import styled from "styled-components";

class SingIt extends Component {
  render() {
    return (
      <div>
        <input
          className="input-email"
          style={{ color: "#363636" }}
          type="email"
          placeholder="Email"
        />
        <Button className="offer-btn">
          Assine a nexflix
          <Icon className="svg" icon={ic_keyboard_arrow_right} size={30} />
        </Button>
      </div>
    );
  }
}

export default SingIt;

const SingItContent = styled.div`
  .svg {
    vertical-align: bottom;
    margin-left: 1rem;
  }

  // Main Input Email
  .input-email {
    width: 38rem;
    border: none;
    padding: 1rem;
    font-size: 1.7rem;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    transsition: background 0.2s ease-in;
  }
`;
