import React, { useState } from "react";
import { Formik } from "formik";
import { BasicForm } from "../../components";
import "../build/css/app.css";

const Login = () => {
  const [validEmail, setValidEmail] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });
  const [errorEmail, setErrorEmail] = useState("");
  const [errorCampos, setErrorCampos] = useState("");
  const [valid, setvalid] = useState("");

  function validarEmail(email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    );
  }

  function validarCampos(email, password) {
    if ([email, password].includes("")) {
      return true;
    }
    return false;
  }

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setErrorCampos("");
    setErrorEmail("");
    setvalid("");

    if (!validarCampos(values.email, values.password)) {
      setErrorCampos("");
      if (validarEmail(values.email)) {
        setErrorEmail("");
        setvalid("Inicio de Secciòn Exitoso");
      } else {
        setErrorEmail("Email incorrecto");
        console.log("error en email");
      }
    } else {
      setErrorCampos("Todos los campos deben estar completos");
    }
  }

  return (
    <>
      <div className="senara-dashboard">
        <form className="senara-content-sm-login" onSubmit={handleSubmit}>
          <label className="floating-label" htmlFor="email">
            Email
          </label>
          <input
            className="floating-input:focus~.bar"
            id="email"
            name="email"
            type="text"
            value={values.email}
            onChange={handleChange}
          />

          <label className="floating-label" htmlFor="password">
            Contraseña
          </label>
          <input
            className="floating-input:focus~.bar"
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          <button className="senara-btn-primary" type="submit">
            Iniciar Secciòn
          </button>
          <a className="senara-tagline" href="">
            ¿No tienes cuenta? Registrate
          </a>
          <a className="senara-tagline" href="">
            ¿Olvidò su contraseña?
          </a>
          {errorCampos && <p className="alert-senara error"> {errorCampos} </p>}
          {errorEmail && <p className="alert-senara error"> {errorEmail} </p>}
          {valid && <p className="alert-senara sceucss"> {valid} </p>}
        </form>
      </div>
    </>
  );
};

export default Login;
