import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../build/css/app.css";
import Alerta from "./Alerta";

const login2 = () => {
  const inicioSeccionShema = Yup.object().shape({
    email: Yup.string()
      .email("Email no valido")
      .required("El email es obligatorio"),
    password: Yup.string().required("Es requerida la contraseña"),
  });

  const [validValues, setvalidValues] = useState(false);

  const handleSubmit = (values) => {
    let arrayseg = [values.target[0].value, values.target[1].value];

    console.log(arrayseg);

    console.log(values);

    values.preventDefault();

    // {
    //   values && values ? (
    //     <Alerta type="success"> inicio de seccion exitoso </Alerta>
    //   ) : null;
    // }

    // try {
    //      const url = 'http://localhost:4000/clientes'
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         body: JSON.stringify(values),
    //         headers: {
    //             "Content-Type": 'application/json'
    //         }
    //     });
    //     const resultado = await response.json();
    //     console.log(resultado);
    // } catch (error) {
    //     console.log(error);
    // }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={inicioSeccionShema}
      >
        {({ errors, touched }) => {
          return (
            <div className="senara-dashboard">
              <Form className="senara-content-sm-login">
                <div className="senara-logo">
                  <div className="senara-img-logo" alt="" />
                </div>

                <p className="senara-tagline">Iniciar Sesion</p>
                <p className="senara-description-page">
                  Ingrese sus credenciales
                </p>

                {errors.email && touched.email ? (
                  <>
                    <a className="a">{errors.email}</a>
                  </>
                ) : null}

                <Field
                  id="email"
                  type="email"
                  className="loating-input:focus~.bar"
                  placeholder="Usuario o Correo"
                  name="email"
                />

                {errors.password && touched.password ? (
                  <>
                    <a className="a"> {errors.password} </a>
                  </>
                ) : null}
                <Field
                  id="password"
                  type="password"
                  className="loating-input:focus~.bar"
                  placeholder="Contraseña
"
                  name="password"
                />

                <button className="senara-btn-primary" type="submit">
                  Iniciar Secciòn
                </button>

                <div className="senara-actions">
                  <a className="a" href="">
                    Crear cuenta
                  </a>
                  <a className="a" href="">
                    ¿Olvidò la contraseña?
                  </a>
                </div>
              </Form>

              <footer className="senara-footer-decoration">
                <div className="decoration-logo"></div>
              </footer>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default login2;
