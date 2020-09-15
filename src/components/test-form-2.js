import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import ZgoDatePicker from './zgo-date-picker'
import SignatureCanvas from 'react-signature-canvas'
import ZgoTextInput from './zgo-text-input'
import ZgoCheckbox from './zgo-checkbox'
import ZgoSelect from './zgo-select'
import ZgoTimePicker from './zgo-time-picker'

import CKEditor from 'ckeditor4-react';

var incidentType = ""

const clear = (sigpad) => {
  sigpad.clear()
  document.getElementsByTagName("canvas")[0].style.background = "white";
}

const trim = (sigpad) => {
  return sigpad.getTrimmedCanvas()
               .toDataURL('image/png')
}

const validate = (values) => {

  const errors = {};

  if (!values.employeeEmail) {
    errors.employeeEmail = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.employeeEmail)) {
    errors.employeeEmail = 'Invalid';
  }

  if (!values.incidentCity) {
    errors.incidentCity = 'Required';
  } else if (values.incidentCity.length > 32) {
    errors.incidentCity = 'Too Long';
  }

  if (!values.incidentAddress) {
    errors.incidentAddress = 'Required';
  } else if (values.incidentAddress.length > 32) {
    errors.incidentAddress = 'Too Long';
  }

  if (!values.incidentState) {
    errors.incidentState = 'Required';
  } else if (values.incidentState.length > 20) {
    errors.incidentZip = 'Not a state';
  }

  if (!values.incidentZip) {
    errors.incidentZip = 'Required';
  } else if (values.incidentZip.toString().length > 10) {
    errors.incidentZip = 'Not a zip code';
  }

  if (!values.incidentTime) errors.incidentTime = 'Required'

  if (!values.employeeStartTime) errors.employeeStartTime = 'Required'

  if (!values.acceptedTerms) errors.acceptedTerms = 'Required'


  



















  return errors;
};

const initialState = {

  jobType: '',


  acceptedTerms: false,

  employeeEmail: '@fortecmedical.com',
  employeeSignature: '',
  employeeDateSigned: new Date(),
  employeeStartTime: '',

  incidentDate: new Date(),
  incidentTime: '',
  incidentAddress: '',
  incidentCity: '',
  incidentState: '',
  incidentZip: '',
  incidentType: incidentType,

  medicalProvider: '',
  medicalAddress: '',
  medicalCity: '',
  medicalState: '',
  medicalZipCode: '',
  medicalPhone: '',

  fortecVehicleNumber : '',
  fortecVehicleLicensePlate: '',
  fortecVehicleDamages: '',
  fortecVehicleAnyoneInjured: false,
  fortecVehiclePoliceReportFiled: '',
  fortecVehiclePoliceReportNumber: '',
  fortecVehicleEmployeeSited: false,
  fortecVehicleTowedAway: false,

  fortecEquipmentType: '',
  fortecEquipmentSerialNumber: '',
  fortecEquipmentFiberType: '',
  fortecEquipmentLotNumber: '',
  fortecEquipmentPatientInjured: false,
  
  damagedOtherVehicle: false,

  otherVehicleOwner: '',
  otherVehicleOwnerAddress: '',
  otherVehicleOwnerCity: '',
  otherVehicleOwnerState: '',
  otherVehicleOwnerZipCode: '',
  otherVehicleOwnerPhone: '',

  driverDifferentThanOwner : false,

  otherVehicleDriver: '',
  otherVehicleDriverAddress: '',
  otherVehicleDriverCity: '',
  otherVehicleDriverState: '',
  otherVehicleDriverZipCode: '',
  otherVehicleDriverPhone: '',
  otherVehicleInsuranceCompany: '',
  otherVehiclePolicyNumber: '',
  otherVehicleDamages: '',
  otherVehicleMake: '',
  otherVehicleModel: '',
  otherVehicleYear: new Date(),
  otherVehicleLicenseNumber : '',
  otherVehicleStateRegistered: '',

  damageLossOrTheft : false,
  damageLossOrTheftWhatHappened: '',
  damageLossOrTheftPoliceReportFiled: false,

  detailedDescription : ''
}

 // And now we can use these
 const SignupForm = () => {

  let sigpad = {}

   return (
     <div>
       <h1>Incident Report</h1>
       <hr />
       <Formik
         initialValues={initialState}
         validate={validate}
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
                    <ZgoTextInput label="Email Address" name="employeeEmail" type="email" placeholder="jdoe@fortecmedical.com" icon="user"/>
                    <ZgoTextInput label="Time you started work?" name="employeeStartTime" type="time" placeholder="12:00AM" />
                    <ZgoTextInput label="Incident Address" name="incidentAddress" type="text" placeholder="6245 Hudson Crossing Parkway" />
                    <ZgoTextInput label="Incident City" name="incidentCity" type="text" placeholder="Hudson" />
                    <ZgoTextInput label="Incident State" name="incidentState" type="text" placeholder="Ohio" />
                    <ZgoTextInput label="Incident Zip" name="incidentZip" type="number" placeholder="44236" />
                    

                    <ZgoSelect label="Job Title" name="jobType">
                      <option value="">Job Title</option>
                      <option value="designer">Designer</option>
                      <option value="development">Developer</option>
                      <option value="product">Product Manager</option>
                      <option value="other">Other</option>
                    </ZgoSelect>

                    <ZgoDatePicker cb={(d) => values.incidentDate = d} text="Incident Date:"/>

                    <ZgoTextInput label="Incident Time" name="incidentTime" type="time" placeholder="12:00AM" />
                    
                    <ZgoCheckbox name="acceptedTerms" cb={() => values.acceptedTerms = !values.acceptedTerms }>
                      I proclaim that everything entered is truthful to the best of my knowledge
                    </ZgoCheckbox>
          
                    
                    <br /><br /><br /><br />
                    <div className="row w-100">
                        <CKEditor
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                console.log( { event, editor } );
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', event );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', event );
                            } }
                        />
                    </div>
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
                          <button style={{width:"100%"}} 
                            className="btn btn-primary" 
                            type="submit" 
                            disabled={isSubmitting} 
                            onClick={() => sigpad.isEmpty() 
                              ? document.getElementsByTagName('canvas')[0].style.background = "var(--danger)" 
                              : null}>Submit</button>
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
