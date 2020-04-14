import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";

class LoginForm extends Component {
  render() {
    return (
      <FormContainer>
        <div className="form-container" style={{ marginBottom: "42px" }}>
          <form>
            <h1 style={{ marginTop: "50px", textAlign: "center" }}>Entrar</h1>
            <div className="input-container">
              <input className="input-empty" type="email" required />
              <label>Email ou telefone</label>
            </div>
            <div className="input-container">
              <input className="input-empty" type="password" required />
              <label>Senha</label>
            </div>
            <div className="button-container">
              <button className="btn-to">Entar</button>
            </div>
            <label className="checkbox-container">
              <input type="checkbox" checked />
              Lembre-se de mim
              <span className="checkmark"></span>
            </label>
            <Link to="/" className="help">
              Ajuda?
            </Link>
          </form>
        </div>
      </FormContainer>
    );
  }
}

export default LoginForm;

// Styled Media Query
const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
});

const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 5;

  .form-container {
    width: 30vw;
    height: 60vh;
    position: relative;
    margin-top:-150px;
    border-radius: 0.5rem;
    background: radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9));
  }

  .input-container {
    margin-top: 1.2rem;
    display: grid;
    grid-template-columns: 1fr;
  }

  .input-empty {
    margin: 1rem 3rem 0.001rem;
    padding: 1rem;
    font-size: 1.2rem;
    border: none;
    outline: none;
    border-radius: 0.2rem;
    background: #4f4f4f;
    color: #fff;
  }

  form div label {
    position: absolute;
    top: 2rem;
    left: 4rem;
    pointer-events: none;
    color: #8a8a8a;
    font-size: 1.2rem;
    transition: transform 150ms ease-out, font-size 150ms, ease-out;
  }

  form div {
    position: relative;
  }

  input:focus ~ label {
    top: 1.2rem;
    font-size: 0.8rem;
  }

  input:focus {
    outline: none;
  }

  .checkbox-container {
    padding-left: 1.8rem;
    position: relative;
    font-size: 0.9rem;
    color: #999999
    cursor: pointer;
    margin-left: 3rem;
  }

  .checkbox-container input {
    display: none;
  }

  .checkbox-container .checkmark {
    display: inline-block;
    background: #454545;
    width: 1rem;
    height: 1rem;
    left: 0;
    top: 0;
    border-radius: 0.1rem;
    position: absolute;
  }

  .checkbox-container input:checked + .checkmark:after {
    content: "";
    position: absolute;
    width: 0.625rem;
    height: 0.25rem;
    border-left: 2px solid #000;
    border-bottom: 2px solid #000;
    top: 25%;
    left: 20%;
    transform: rotate(-45deg);
  }

  .help {
    text-decoration: none;
    color: #828282;
    margin-left: 10rem;
    font-size: 0.9rem;
  }

  .btn-to {
    margin: 2rem;
    margin-left: 3rem;
    width: 22.5rem;
    height: 3.4rem;
    font-size: 1.2rem;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 0.2rem;
    background: var(--main-red);
    transsition: background 0.2s ease-in;
    cursor: pointer;
    &:hover {
      background: var(--main-red-hover);
    }
  }
`;
