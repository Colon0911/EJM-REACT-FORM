import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Alerta from './Alerta';

const Formulario = () => {

    //Se define el schema de Yup
    const nuevoClienteShema = Yup.object().shape({
        nombre: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(40, 'El nombre es muy largo')
            .required('El nombre del cliente es obligatorio'),
        empresa: Yup.string()
            .required('El nombre de la empresa es obligatorio'),
        email: Yup.string()
            .email('Email no valido')
            .required('El email es obligatorio'),
        telefono: Yup.number()
            .positive('Número no válido')
            .integer('Número no válido')
            .typeError('El número no es valido'),
    });

    const handleSubmit = async (values) => {
        try {
            const url = 'http://localhost:4000/clientes'
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            const resultado = await response.json();
            console.log(resultado);

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Agregar Cliente</h1>
            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: ''

                }}
                onSubmit={(values) => { handleSubmit(values) }}
                validationSchema={nuevoClienteShema}
            >
                {({ errors, touched }) => {
                    //console.log(data)
                    return (
                        <Form className="mt-10">
                            <div className="mb-4">
                                <label
                                    className="text-gray-800"
                                    htmlFor="nombre"
                                >Nombre:</label>

                                <Field
                                    id="nombre"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Nombre del Cliente"
                                    name="nombre"
                                />
                                {errors.nombre && touched.nombre ? (
                                    <Alerta>{errors.nombre}</Alerta>
                                ) : null}
                            </div>

                            <div className="mb-4">
                                <label
                                    className="text-gray-800"
                                    htmlFor="empresa"
                                >Empresa:</label>

                                <Field
                                    id="empresa"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Empresa del Cliente"
                                    name="empresa"
                                />
                                {errors.empresa && touched.empresa ? (
                                    <Alerta>{errors.empresa}</Alerta>
                                ) : null}
                            </div>

                            <div className="mb-4">
                                <label
                                    className="text-gray-800"
                                    htmlFor="email"
                                >Email:</label>

                                <Field
                                    id="email"
                                    type="email"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Email del Cliente"
                                    name="email"
                                />
                                {errors.email && touched.email ? (
                                    <Alerta>{errors.email}</Alerta>
                                ) : null}
                            </div>

                            <div className="mb-4">
                                <label
                                    className="text-gray-800"
                                    htmlFor="telefono"
                                >Teléfono:</label>

                                <Field
                                    id="telefono"
                                    type="tel"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Telefono del Cliente"
                                    name="telefono"
                                />
                                {errors.telefono && touched.telefono ? (
                                    <Alerta>{errors.telefono}</Alerta>
                                ) : null}
                            </div>

                            <div className="mb-4">
                                <label
                                    className="text-gray-800"
                                    htmlFor="notas"
                                >Notas:</label>

                                <Field
                                    as="textarea"
                                    id="notas"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50 h-40"
                                    placeholder="Notas del Cliente"
                                    name="notas"
                                />
                                {errors.notas && touched.notas ? (
                                    <Alerta>{errors.notas}</Alerta>
                                ) : null}

                                <input
                                    type="submit"
                                    value="Agregar Cliente"
                                    className="mt-5 w-full bg-blue-800 p-3 text-white 
                            uppercase font-bold text-lg"
                                />
                            </div>
                        </Form>
                    )
                }}
            </Formik>

        </div>
    )
}

export default Formulario