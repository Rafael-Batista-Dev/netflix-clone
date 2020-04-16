import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const regexp = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

const initState = {
  checked: false,
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

class LoginForm extends Component {
  state = initState;
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  state = initState;
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  validate = () => {
    let inputError = false;
    const errors = {
      emailError: "",
      passwordError: "",
    };

    if (!this.state.email) {
      inputError = true;
      errors.emailError = "Email ou telefone inválido!";
    } else if (!this.state.email.match(regexp)) {
      inputError = true;
      errors.emailError = (
        <span style={{ color: "red" }}>Email ou telefone errado!</span>
      );
    }
    if (!this.state.password.length < 4) {
      inputError = true;
      errors.passwordError = "No mínimo 4 caracteres";
    }

    this.setState({
      ...errors,
    });

    return inputError;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const err = this.validate();
    if (!err) {
      this.setState(initState);
    }
  };

  handlerCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  render() {
    return (
      <FormContainer>
        <div className="form-container" style={{ marginBottom: "42px" }}>
          <form>
            <h1 style={{ marginTop: "30px", textAlign: "center" }}>Entrar</h1>
            <div className="input-container">
              <input
                className={
                  this.state.emailError
                    ? "input-error input-empty"
                    : "input-empty"
                }
                type="email"
                required
                onChange={this.handleEmailChange}
                value={this.state.email}
              />
              <label>Email ou telefone</label>
              <span style={{ color: "#BD7302", marginLeft: "3rem" }}>
                {this.state.emailError}
              </span>
            </div>
            <div className="input-container">
              <input
                className={
                  this.state.passwordError
                    ? "input-error input-empty"
                    : "input-empty"
                }
                type="password"
                required
                onChange={this.handlePasswordChange}
                value={this.state.password}
              />
              <label>Senha</label>
              <span style={{ color: "#BD7302", marginLeft: "3rem" }}>
                {this.state.passwordError}
              </span>
            </div>
            <div className="button-container">
              <button
                type="submit"
                className="btn-to"
                onClick={(e) => this.onSubmit(e)}
              >
                Entar
              </button>
            </div>
            <label className="checkbox-container">
              <input
                type="checkbox"
                defaultChecked={this.state.checked}
                onChange={this.handlerCheckbox}
              />
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
  tablet: "640px",
});

const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 5;

  .form-container {
    width: 25rem;
    height: 28rem;
    position: relative;
    margin-top:-150px;
    border-radius: 0.5rem;
    background: radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9));
    ${customMedia.lessThan("tablet")`
      padding: 0.6rem;
      height: 35rem;
      width: 25rem;
      height: 28rem;
    `}
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

  .input-error{
    border-bottom: 1px solid #DB7302
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
    ${customMedia.lessThan("tablet")`
    margin-top: 10rem;
`}
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
    font-size: 0.9rem;
    margin-left: 7rem;
    &:hover{
      text-decoration: underline;
    }
    ${customMedia.lessThan("tablet")`
    margin-left: 6rem;
  `}
  }

  .btn-to {
    margin: 2rem;
    margin-left: 3rem;
    width: 19rem;
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
    ${customMedia.lessThan("tablet")`
    width: 18rem;
`}
  }
`;
