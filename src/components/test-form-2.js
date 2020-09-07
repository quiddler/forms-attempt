import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import ZgoDatePicker from './zgo-date-picker'
import SignatureCanvas from 'react-signature-canvas'
import ZgoTextInput from './zgo-text-input'
import ZgoCheckbox from './zgo-checkbox'
import ZgoSelect from './zgo-select'

 
const clear = (sigpad) => {
  sigpad.clear()
  document.getElementsByTagName("canvas")[0].style.background = "white";
}

const trim = (sigpad) => {
  return sigpad.getTrimmedCanvas()
               .toDataURL('image/png')
}


 // And now we can use these
 const SignupForm = () => {

  let sigpad = {}

   return (
     <div>
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
             .oneOf([true], 'You must state the truthfulness of this incident.'),
           jobType: Yup.string()
             .oneOf(
               ['designer', 'development', 'product', 'other'],
               'Job Title'
             )
             .required('Required'),
            
         })}
         onSubmit={(values, { setSubmitting }) => {
           setTimeout(() => {
             values.signature = trim(sigpad);
             if (sigpad.isEmpty()) {
               setSubmitting(false);
               return false;
             }
             alert(JSON.stringify(values, null, 2));
             setSubmitting(false);
           }, 400);
         }}
       >
         {({ isSubmitting, values }) => (
         <Form>
           <div className="container">
                <div className="row">
                    <ZgoTextInput label="First Name" name="firstName" type="text" placeholder="Jane" icon="user"/>
                    <ZgoTextInput label="Last Name" name="lastName" type="text" placeholder="Doe"  icon="user"/>
                    <ZgoTextInput label="Email Address" name="email" type="email" placeholder="jdoe@fortecmedical.com" icon="user"/>

                    <ZgoSelect label="Job Title" name="jobType">
                      <option value="">Job Title</option>
                      <option value="designer">Designer</option>
                      <option value="development">Developer</option>
                      <option value="product">Product Manager</option>
                      <option value="other">Other</option>
                    </ZgoSelect>

                    <ZgoDatePicker cb={(d) => values.signatureDate = d} text="Today's date:"/>
                    
                    <ZgoCheckbox name="acceptedTerms" cb={() => values.acceptedTerms = !values.acceptedTerms }>
                      I proclaim that everything entered is truthful to the best of my knowledge
                    </ZgoCheckbox>
          
                    
                    <br /><br /><br /><br />
                    <div className="row w-100">
                      <label style={{textAlign: "center", width: "100%"}}>Signature:</label>
                      <SignatureCanvas canvasProps={{ className: "sigCanvas" }}
                                  ref={(ref) => { sigpad = ref }}
                                  id="sigcanvas"
                                  onBegin={() => document.getElementsByTagName("canvas")[0].style.background = "white"}/>
                    </div>


                    <div className="row" style={{width: "100%"}}>
                        <div className="col col-6">
                          <button style={{width:"100%"}} className="btn btn-warning" type="reset" onClick={() => clear(sigpad)} >Reset</button>
                        </div>
                        <div className="col col-6">
                          <button style={{width:"100%"}} className="btn btn-primary" type="submit" disabled={isSubmitting} onClick={() => sigpad.isEmpty() ? document.getElementsByTagName('canvas')[0].style.background = "var(--danger)" : null}>Submit</button>
                        </div>
                        
                    </div>
                   
                </div>
           </div>
         </Form>)}
       </Formik>
     </div>
   );
 };

 export default SignupForm