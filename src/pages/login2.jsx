import React, { useState } from 'react'
import { Formik } from 'formik';
import { BasicForm } from '../../components';
import "../build/css/app.css"


const validation = values => {
    let errors = {};
   
    if (!values.email) {
      errors.name = 'Name is required!';
    } else if (values.name.length <= 1) {  
      errors.name = 'Name has to be 1 character at less!';
    }
    
    return errors;
   }
   
   const Basic = () => (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(values)
          console.log(actions)
          actions.setSubmitting(false);
        }, 2000);
      }}
      validate={validation}
    >
      {props => <BasicForm {...props} />}
    </Formik>
   );
   
   export default Basic;