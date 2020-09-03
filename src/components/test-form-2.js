import React, { ReactNode } from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import ZgoDatePicker from './zgo-date-picker'

 
 const MyTextInput = ({ label, ...props }) => {
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input> and also replace ErrorMessage entirely.
   const [field, meta] = useField(props);
   return (
     <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
       <label htmlFor={props.id || props.name}>{label}</label>
       <input className="form-control" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div style={{position:"absolute", textAlign:"right", width:"90%", top:"0px" }} className="error">{meta.error}</div>
       ) : null}
     </div>
   );
 };
 
 const MyCheckbox = ({ children, ...props }) => {
   // We need to tell useField what type of input this is
   // since React treats radios and checkboxes differently
   // than inputs/select/textarea.
   const [field, meta] = useField({ ...props, type: 'checkbox' });
   const [checked, setChecked] = React.useState(false)
   return (
     <div className="row w-100">
     <div className="col col-12">
       <div className="form-check" style={{textAlign:"center"}}>
         <input checked={checked} className="form-control form-check-input" type="checkbox" {...field} {...props} />
         <label className="form-check-label" onClick={() => {setChecked(!checked); props.cb(); } }>{children}</label>
       
       {meta.touched && meta.error ? (
         <div style={{position:"absolute", textAlign:"center", width:"100%", top:"24px"}} className="error">{meta.error}</div>
       ) : null}
     </div>
     </div>
       </div>
   );
 };

 const MySelect = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
     <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
       <label htmlFor={props.id || props.name}>{label}</label>
       <select {...field} {...props} className="form-control" />
       {meta.touched && meta.error ? (
         <div style={{position:"absolute", textAlign:"right", width:"90%", top:"0px"}} className="error">{meta.error}</div>
       ) : null}
     </div>
   );
 };
 
 // And now we can use these
 const SignupForm = () => {
   return (
     <>
       <h1>Incident Report</h1>
       <hr />
       <Formik
         initialValues={{
           firstName: '',
           lastName: '',
           email: '',
           acceptedTerms: false, // added for our checkbox
           jobType: '', // added for our select
           signatureDate: new Date(),
         }}
         validationSchema={Yup.object({
           firstName: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .required('Required'),
           lastName: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
           email: Yup.string()
             .email('Invalid email address')
             .required('Required'),
           acceptedTerms: Yup.boolean()
             .required('Required')
             .oneOf([true], 'You must accept the terms and conditions.'),
           jobType: Yup.string()
             .oneOf(
               ['designer', 'development', 'product', 'other'],
               'Invalid Job Type'
             )
             .required('Required'),
            
         })}
         onSubmit={(values, { setSubmitting }) => {
           setTimeout(() => {
             alert(JSON.stringify(values, null, 2));
             setSubmitting(false);
           }, 400);
         }}
       >
         {({ isSubmitting, values }) => (
         <Form>
           <div className="container">
                <div className="row">
                    <MyTextInput label="First Name" name="firstName" type="text" placeholder="Jane"/>
                    <MyTextInput label="Last Name" name="lastName" type="text" placeholder="Doe" />
                    <MyTextInput label="Email Address" name="email" type="email" placeholder="jane@formik.com" />

                    <MySelect label="Job Title" name="jobType">
                      <option value="">Select a job type</option>
                      <option value="designer">Designer</option>
                      <option value="development">Developer</option>
                      <option value="product">Product Manager</option>
                      <option value="other">Other</option>
                    </MySelect>

                    <ZgoDatePicker cb={(d) => values.signatureDate = d} text="Today's date:"/>
                    
                    <MyCheckbox name="acceptedTerms" cb={() => values.acceptedTerms = !values.acceptedTerms }>
                      I accept the terms and conditions
                    </MyCheckbox>
          
                    <div className="row" style={{width: "100%"}}>
                        <div className="col col-6">
                          <button style={{width:"100%"}} className="btn btn-secondary" type="reset">Reset</button>
                        </div>
                        <div className="col col-6">
                          <button style={{width:"100%"}} className="btn btn-primary" type="submit" disabled={isSubmitting}>Submit</button>
                        </div>
                        
                    </div>
                   
                </div>
           </div>
         </Form>)}
       </Formik>
     </>
   );
 };

 export default SignupForm