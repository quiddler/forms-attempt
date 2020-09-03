import ZgoCheckbox from './zgo-checkbox'
import React from "react";
import { useFormik } from 'formik'
import ZgoDatePicker from './zgo-date-picker';
import ZgoText from './zgo-input';

const SignupForm = () => {

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.firstName) {
          errors.firstName = 'Required';
        } else if (values.firstName.length > 32) {
          errors.firstName = 'Must be 32 characters or less';
        }
      
        if (!values.lastName) {
          errors.lastName = 'Required';
        } else if (values.lastName.length > 32) {
          errors.lastName = 'Must be 32 characters or less';
        }


      /*
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
      */
        return errors;
      };

    var stuff = {
        firstName: '',
        lastName: '',
        email: '',
        died: false,
        lived:false,
        date: new Date(),
      }
    // Notice that we have to initialize ALL of fields with values. These
    // could come from props, but since we don't want to prefill this form,
    // we just use an empty string. If you don't do this, React will yell
    // at you.
    let formik = useFormik({
      initialValues: stuff,
      validate,
      onSubmit: (values: any) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
      <div className="container">
      <div className="row">
      
        <ZgoText text="First Name" key="firstName" cb={(s: string) => formik.values.firstName = s} type="text" formik={formik} icon="user"/> 
        {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        <ZgoText text="Last Name" key="lastName" cb={(s: string) => formik.values.lastName = s} type="text" formik={formik}  />
        {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        <ZgoCheckbox cb={() => formik.values.died = !formik.values.died} text="Did they die?"/>
        <ZgoCheckbox cb={() => formik.values.lived = !formik.values.lived} text="Did they live?"/>
        <ZgoDatePicker cb={(d: Date) => formik.values.date = d} text="Hello World"/>
        <button className="btn btn-primary" type="submit">Submit</button>
      
      </div>
      </div>
      </form>
    );
  };

  export default SignupForm