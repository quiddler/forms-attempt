import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import ZgoDatePicker from './zgo-date-picker'
import SignatureCanvas from 'react-signature-canvas'
import ZgoTextInput from './zgo-text-input'
import ZgoCheckbox from './zgo-checkbox'
import ZgoTextArea from './zgo-text-area'
import ZgoSelect from './zgo-select'

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

  if (!values.detailedDescription) errors.detailedDescription = 'Required'

  if (!values.acceptedTerms) errors.acceptedTerms = 'Required'

  if(incidentType === "personalInjury") {
      if (!values.medicalProvider) errors.medicalProvider = "Required"
      if (!values.medicalAddress) errors.medicalAddress = "Required"
      if (!values.medicalCity) errors.medicalCity = "Required"
      if (!values.medicalState) errors.medicalState = "Required"
      if (!values.medicalZipCode) errors.medicalZipCode = "Required"
      if (!values.medicalPhone) errors.medicalPhone = "Required"
  }
    
  if(incidentType === "vehicleAccident") {
      if (!values.fortecVehicleNumber) errors.fortecVehicleNumber = "Required"
      if (!values.fortecVehicleLicensePlate) errors.fortecVehicleLicensePlate = "Required"
      if (!values.fortecVehicleDamages) errors.fortecVehicleDamages = "Required"
      
      if (values.fortecVehicleAnyoneInjured) {
        if (!values.medicalProvider) errors.medicalProvider = "Required"
        if (!values.medicalAddress) errors.medicalAddress = "Required"
        if (!values.medicalCity) errors.medicalCity = "Required"
        if (!values.medicalState) errors.medicalState = "Required"
        if (!values.medicalZipCode) errors.medicalZipCode = "Required"
        if (!values.medicalPhone) errors.medicalPhone = "Required"
      }

      if (values.fortecVehicleEmployeeCited) {

      }

      if (values.fortecVehiclePoliceReportFiled) {
        if (!values.fortecVehiclePoliceReportNumber) errors.fortecVehiclePoliceReportNumber = "Required"
      }

      if (values.damagedOtherVehicle) {
          if (!values.otherVehicleOwner) errors.otherVehicleOwner = "Required"
          if (!values.otherVehicleOwnerAddress) errors.otherVehicleOwnerAddress = "Required"
          if (!values.otherVehicleOwnerCity) errors.otherVehicleOwnerCity = "Required"
          if (!values.otherVehicleOwnerState) errors.otherVehicleOwnerState = "Required"
          if (!values.otherVehicleOwnerZipCode) errors.otherVehicleOwnerZipCode = "Required"
          if (!values.otherVehicleOwnerPhone) errors.otherVehicleOwnerPhone = "Required"

          if (!values.otherVehicleInsuranceCompany) errors.otherVehicleInsuranceCompany = "Required"
          if (!values.otherVehiclePolicyNumber) errors.otherVehiclePolicyNumber = "Required"
          if (!values.otherVehicleDamages) errors.otherVehicleDamages = "Required"
          if (!values.otherVehicleMake) errors.otherVehicleMake = "Required"
          if (!values.otherVehicleModel) errors.otherVehicleModel = "Required"
          if (!values.otherVehicleYear) errors.otherVehicleYear = "Required"
          if (!values.otherVehicleLicenseNumber) errors.otherVehicleLicenseNumber = "Required"
          if (!values.otherVehicleStateRegistered) errors.otherVehicleStateRegistered = "Required"

          if (values.driverDifferentThanOwner) {
            if (!values.otherVehicleDriver) errors.otherVehicleDriver = "Required"
            if (!values.otherVehicleDriverAddress) errors.otherVehicleDriverAddress = "Required"
            if (!values.otherVehicleDriverCity) errors.otherVehicleDriverCity = "Required"
            if (!values.otherVehicleDriverState) errors.otherVehicleDriverState = "Required"
            if (!values.otherVehicleDriverZipCode) errors.otherVehicleDriverZipCode = "Required"
            if (!values.otherVehicleDriverPhone) errors.otherVehicleDriverPhone = "Required"
         }
      }

    }












  return errors;
};

const initialState = {

  acceptedTerms: false,

  employeeEmail: '@fortecmedical.com',
  employeeSignature: '',
  employeeDateSigned: new Date(),
  employeeStartTime: '',

  detailedDescription : '',

  incidentDate: '',
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
  fortecVehicleEmployeeCited: false,
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
  otherVehicleYear: '',
  otherVehicleLicenseNumber : '',
  otherVehicleStateRegistered: '',

  damageLossOrTheft : false,
  damageLossOrTheftWhatHappened: '',
  damageLossOrTheftPoliceReportFiled: false,

  witnesses : [
    {
      name: "",
      desc: "",
      code: "",
      addr: ""
    }
  ]
}

const medical = () => (
  <div className="row" style={{padding: "1em"}}>
  <ZgoTextInput label="Medical Provider" name="medicalProvider" type="text" placeholder="Robinson Memorial Hospital" />
  <ZgoTextInput label="Provider Address" name="medicalAddress" type="text" placeholder="123 Front Street" />
  <ZgoTextInput label="Provider City" name="medicalCity" type="text" placeholder="Kent" />
  <ZgoTextInput label="Provider State" name="medicalState" type="text" placeholder="Ohio" />
  <ZgoTextInput label="Provider Zip" name="medicalZipCode" type="text" placeholder="44240" />
  <ZgoTextInput label="Provider Phone" name="medicalPhone" type="text" placeholder="330-673-1234" />
</div>
)

const otherVehicle = (values, differentDriver, setDifferentDriver) => (
  <div className="row" style={{padding: "1em"}}>
    <ZgoTextInput label="Other's Insurance" name="otherVehicleInsuranceCompany" type="text" placeholder="Allstate"/>
    <ZgoTextInput label="Other's Policy #" name="otherVehiclePolicyNumber" type="text" placeholder="12F67H980P-0231G"/>
    <ZgoTextInput label="Other's Damages" name="otherVehicleDamages" type="text" placeholder="Broken Windshield"/>
    <ZgoTextInput label="Vehicle Make" name="otherVehicleMake" type="text" placeholder="Honda"/>
    <ZgoTextInput label="Vehicle Model" name="otherVehicleModel" type="text" placeholder="CRV"/>
    <ZgoTextInput label="Vehicle Year" name="otherVehicleYear" type="date" placeholder="2020"/>
    <ZgoTextInput label="License Plate" name="otherVehicleLicenseNumber" type="text" placeholder="FEC 2140"/>
    <ZgoTextInput label="State Registered" name="otherVehicleStateRegistered" type="text" placeholder="Ohio"/>

    <ZgoTextInput label="Other Vehicle Owner" name="otherVehicleOwner" type="text" placeholder="Jon Doe"/>
    <ZgoTextInput label="Other Vehicle Address" name="otherVehicleOwnerAddress" type="text" placeholder="123 Front Street"/>
    <ZgoTextInput label="Other Vehicle City" name="otherVehicleOwnerCity" type="text" placeholder="Kent"/>
    <ZgoTextInput label="Other Vehicle State" name="otherVehicleOwnerState" type="text" placeholder="Oregon"/>
    <ZgoTextInput label="Other Vehicle Zip" name="otherVehicleOwnerZipCode" type="text" placeholder="31579"/>
    <ZgoTextInput label="Other Vehicle Phone" name="otherVehicleOwnerPhone" type="text" placeholder="2347039147"/>
    <ZgoCheckbox name="driverDifferentThanOwner" cb={() => {values.driverDifferentThanOwner = !values.driverDifferentThanOwner; setDifferentDriver(!differentDriver);}}>
      Was someone other than the owner driving?
    </ZgoCheckbox>
    {differentDriver ? (<>
      <ZgoTextInput label="Other Vehicle Driver" name="otherVehicleDriver" type="text" placeholder="Jon Doe"/>
      <ZgoTextInput label="Other Vehicle Address" name="otherVehicleDriverAddress" type="text" placeholder="123 Front Street"/>
      <ZgoTextInput label="Other Vehicle City" name="otherVehicleDriverCity" type="text" placeholder="Kent"/>
      <ZgoTextInput label="Other Vehicle State" name="otherVehicleDriverState" type="text" placeholder="Oregon"/>
      <ZgoTextInput label="Other Vehicle Zip" name="otherVehicleDriverZipCode" type="text" placeholder="31579"/>
      <ZgoTextInput label="Other Vehicle Phone" name="otherVehicleDriverPhone" type="text" placeholder="2347039147"/>
    </>) : null}
  </div>
)

 // And now we can use these
 const IncidentReport = (props) => {
  incidentType = props.type;
  let sigpad = {}

  const [isInjured, setIsInjured] = React.useState(false);
  const [policeReportFiled, setPoliceReportFiled] = React.useState(false);
  const [damagedOtherVehicle, setDamagedOtherVehicle] = React.useState(false)
  const [differentDriver, setDifferentDriver] = React.useState(false)


   return (
     <div>
       <h1 className="cursor" style={{marginTop: "1.25rem"}} onClick={() => props.cb("")}><i className="fa fa-arrow-left"></i> Incident Report</h1>
       <br />
       <Formik
         initialValues={initialState}
         validate={validate}
         onSubmit={(values, { setSubmitting }) => {
           setTimeout(() => {
             values.employeeSignature = trim(sigpad);
             if (sigpad.isEmpty()) {
               setSubmitting(false);
               return false;
             }
             
             console.log(values);
             setSubmitting(false);
           }, 400);
         }}
       >
         {({ isSubmitting, values }) => (
         <Form>
           <div className="container">
           <div className="card w-100" style={{padding: "1em"}}>
                <div className="row">
                  
                    <ZgoTextInput label="Email Address" name="employeeEmail" type="email" placeholder="jdoe@fortecmedical.com" icon="user"/>
                    <ZgoTextInput label="Time work started?" name="employeeStartTime" type="time" placeholder="12:00AM" />
                    <ZgoTextInput label="Incident Location" name="incidentAddress" type="text" placeholder="6245 Hudson Crossing Parkway" />
                    <ZgoTextInput label="Incident City" name="incidentCity" type="text" placeholder="Hudson" />
                    <ZgoTextInput label="Incident State" name="incidentState" type="text" placeholder="Ohio" />
                    <ZgoTextInput label="Incident Zip" name="incidentZip" type="number" placeholder="44236" />

                    <ZgoDatePicker cb={(d) => values.incidentDate = d} text="Incident Date:"/>

                    <ZgoTextInput label="Incident Time" name="incidentTime" type="time" placeholder="12:00AM" />
                    </div>  
                   
                    </div>
                    <br/>
                   <br/>
                   <br/>
                    {props.type === "personalInjury" ? (
                      <div className="card w-100" style={{padding: "1em"}}>
                          {medical()}
                      </div>
                    ) : null }



                    {props.type === "vehicleAccident" ? (
                      <div className="card w-100" style={{padding: "1em"}}>
                        <div className="row">
                        <ZgoTextInput label="Fortec Vehicle #" name="fortecVehicleNumber" type="text" placeholder="100A" />
                        <ZgoTextInput label="License Plate" name="fortecVehicleLicensePlate" type="text" placeholder="HNA 2456" />
                        <ZgoTextInput label="Damages" name="fortecVehicleDamages" type="text" placeholder="bumper busted" />
                        <ZgoCheckbox name="damagedOtherVehicle" cb={() => {values.damagedOtherVehicle = !values.damagedOtherVehicle; setDamagedOtherVehicle(!damagedOtherVehicle)}}>
                          Was another car involved?
                        </ZgoCheckbox>
                        {damagedOtherVehicle ? otherVehicle(values, differentDriver, setDifferentDriver) : null}
                        <ZgoCheckbox name="fortecVehicleAnyoneInjured" cb={() => {values.fortecVehicleAnyoneInjured = !values.fortecVehicleAnyoneInjured; setIsInjured(!isInjured);}}>
                          Was anyone injured?
                        </ZgoCheckbox>
                        {isInjured ? medical() : null}
                        <ZgoCheckbox name="fortecVehiclePoliceReportFiled" cb={() => {values.fortecVehiclePoliceReportFiled = !values.fortecVehiclePoliceReportFiled; setPoliceReportFiled(!policeReportFiled)}}>
                          Was a police report filed?
                        </ZgoCheckbox>
                        {policeReportFiled ? <ZgoTextInput label="Police Report #" name="fortecVehiclePoliceReportNumber" type="text" placeholder="1234567890R" /> : null}

                        <ZgoCheckbox name="fortecVehicleEmployeeCited" cb={() => values.fortecVehicleEmployeeCited = !values.fortecVehicleEmployeeCited}>
                          We're you given a ticket/citation?
                        </ZgoCheckbox>
                        <ZgoCheckbox name="fortecVehicleTowedAway" cb={() => values.fortecVehicleTowedAway = !values.fortecVehicleTowedAway}>
                          Was a fortec vehicle towed from the scene?
                        </ZgoCheckbox>
                      </div>
                      </div>
                    ) : null }




                    <br/>
                   <br/>
                   <br/>
                    <div className="card w-100" style={{padding: "1em"}}>
                    <div className="row w-100">
                        <h2 style={{textAlign: "center", width: "100%", marginTop: "1.25rem"}}>Write a Detailed Description</h2>
                        <ZgoTextArea name="detailedDescription" label="" icon="pencil-alt" />
                    </div>
                    </div>
                    <br />
                   <br />

                    <div className="card" style={{padding: "1em"}}>
                    <h2 style={{textAlign: "center", width: "100%", marginTop: "1.25rem"}}>Witnesses</h2>
                   <FieldArray name="witnesses">
                      {({ insert, remove, push }) => (
                        <div>
                          {values.witnesses.length > 0 &&
                            values.witnesses.map((witness, index) => (
                              <div className="row" key={index}>
                                <div className="col">
                                  <label htmlFor={`witnesses.${index}.name`}>Name</label>
                                  <Field
                                    name={`witnesses.${index}.name`}
                                    placeholder="Jane Doe"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>

                                <div className="col">
                                  <label htmlFor={`witnesses.${index}.addr`}>Address</label>
                                  <Field
                                    name={`witnesses.${index}.addr`}
                                    placeholder=""
                                    type="text"
                                    className="form-control"
                                  />
                                </div>

                                <div className="col">
                                  <label htmlFor={`witnesses.${index}.desc`}>Description</label>
                                  <Field
                                    name={`witnesses.${index}.desc`}
                                    placeholder=""
                                    type="text"
                                    className="form-control"
                                  />
                                </div>

                                <div className="col">
                                <ZgoSelect label="Code" name={`witnesses.${index}.code`}>
                                  <option value="">Select</option>
                                  <option value="employee">Employee</option>
                                  <option value="pedestrian">Pedestrian</option>
                                  <option value="client">Client</option>
                                  <option value="witness">Witness</option>
                                </ZgoSelect>
                                </div>

                                <div className="col">
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => remove(index)}
                                  >
                                    X
                                  </button>
                                </div>
                              </div>
                            ))}
                          <br />
                          <br />
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => push({ name: "", desc: "", code: "", addr: "" })}
                          >
                            Add Witness
                          </button>
                        </div>
                      )}
                    </FieldArray>
                    </div>

                   <br />
                   <br /> 
                    <ZgoCheckbox name="acceptedTerms" cb={() => values.acceptedTerms = !values.acceptedTerms }>
                      I proclaim that everything entered is truthful to the best of my knowledge
                    </ZgoCheckbox>
                   <br />
                   <br /> 
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
           
         </Form>)}
       </Formik>
     </div>
   );
 };

 export default IncidentReport
