import React from 'react';
import { Formik, Form, Field } from 'formik'
import ZgoDatePicker from './zgo-date-picker'
import SignatureCanvas from 'react-signature-canvas'
import ZgoTextInput from './zgo-text-input'
import ZgoCheckbox from './zgo-checkbox'
import ZgoTextArea from './zgo-text-area'
import ZgoSelect from './zgo-select'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact';

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

  if (!values.detailedDescription.trim()) errors.detailedDescription = 'Required'

  if (!values.acceptedTerms) errors.acceptedTerms = 'Required'

  if(incidentType === "personalInjury") {
      if (!values.whoWasInjured) errors.whoWasInjured = "Required"
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
        if (!values.whoWasInjured) errors.whoWasInjured = "Required"
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

    if(incidentType === "propertyDamage" || incidentType === "theft") {
      if (!values.whatWasDamagedOrStolen) errors.whatWasDamagedOrStolen = "Required"
      if (values.damageLossOrTheftPoliceReportFiled) {
        if(!values.damageLossOrTheftPoliceReportNumber) errors.damageLossOrTheftPoliceReportNumber = "Required"
      }
    }

    if(incidentType === "equipmentDamage") {
      if (!values.fortecEquipmentType) errors.fortecEquipmentType = "Required"
      if (!values.fortecEquipmentSerialNumber) errors.fortecEquipmentSerialNumber = "Required"
      if (!values.fortecEquipmentFiberType) errors.fortecEquipmentFiberType = "Required"
      if (!values.fortecEquipmentLotNumber) errors.fortecEquipmentLotNumber = "Required"

      if (values.fortecEquipmentPatientInjured) {
        if (!values.whoWasInjured) errors.whoWasInjured = "Required"
        if (!values.medicalProvider) errors.medicalProvider = "Required"
        if (!values.medicalAddress) errors.medicalAddress = "Required"
        if (!values.medicalCity) errors.medicalCity = "Required"
        if (!values.medicalState) errors.medicalState = "Required"
        if (!values.medicalZipCode) errors.medicalZipCode = "Required"
        if (!values.medicalPhone) errors.medicalPhone = "Required"
      }
    }

    if(incidentType === "equipmentInjury") {
      if (!values.fortecEquipmentType) errors.fortecEquipmentType = "Required"
      if (!values.fortecEquipmentSerialNumber) errors.fortecEquipmentSerialNumber = "Required"
      if (!values.fortecEquipmentFiberType) errors.fortecEquipmentFiberType = "Required"
      if (!values.fortecEquipmentLotNumber) errors.fortecEquipmentLotNumber = "Required"

      if (!values.whoWasInjured) errors.whoWasInjured = "Required"
      if (!values.medicalProvider) errors.medicalProvider = "Required"
      if (!values.medicalAddress) errors.medicalAddress = "Required"
      if (!values.medicalCity) errors.medicalCity = "Required"
      if (!values.medicalState) errors.medicalState = "Required"
      if (!values.medicalZipCode) errors.medicalZipCode = "Required"
      if (!values.medicalPhone) errors.medicalPhone = "Required"
    }
    
    if(incidentType === "laser") {
      if (!values.laserCaseNumber) errors.laserCaseNumber = "Required"
      if (!values.laserCustomer) errors.laserCustomer = "Required"
      if (!values.laserDoctorName) errors.laserDoctorName = "Required"
      if (!values.laserProcedureName) errors.laserProcedureName = "Required"
      if (!values.laserPatientReferenceNumber) errors.laserPatientReferenceNumber = "Required"
      if (!values.laserSafetyOfficer) errors.laserSafetyOfficer = "Required"
      if (!values.laserDeputySafetyOfficer) errors.laserDeputySafetyOfficer = "Required"
      if (!values.laserAccessoriesAndFibers.trim()) errors.laserAccessoriesAndFibers = "Required"
      if (!values.laserWorkOrderNumber) errors.laserWorkOrderNumber = "Required"

      if (values.fortecEquipmentPatientInjured) {
        if (!values.whoWasInjured) errors.whoWasInjured = "Required"
        if (!values.medicalProvider) errors.medicalProvider = "Required"
        if (!values.medicalAddress) errors.medicalAddress = "Required"
        if (!values.medicalCity) errors.medicalCity = "Required"
        if (!values.medicalState) errors.medicalState = "Required"
        if (!values.medicalZipCode) errors.medicalZipCode = "Required"
        if (!values.medicalPhone) errors.medicalPhone = "Required"
      }
    }

  return errors;
};

const validateWitnesses = (values2) => {

  const errors = {};

  if (!values2.witnessName.trim()) errors.witnessName = 'Required'
  if (!values2.witnessDescription.trim()) errors.witnessDescription = 'Required'
  if (!values2.witnessCode.trim()) errors.witnessCode = 'Required'
  if (!values2.witnessAddress.trim()) errors.witnessAddress = 'Required'
  if (!values2.witnessPhone.trim()) errors.witnessPhone = 'Required'

  return errors;
}

const witnessState = {
  witnessName: "",
  witnessDescription: "",
  witnessCode: "",
  witnessAddress: "",
  witnessPhone: ""
}

const initialState = {

  whoWasInjured: "",
  acceptedTerms: false,

  employeeEmail: '',
  employeeSignature: '',
  employeeDateSigned: new Date(),
  employeeStartTime: '',
  employeePhone: '',

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

  whatWasDamagedOrStolen: '',
  damageLossOrTheftPoliceReportFiled: false,
  damageLossOrTheftPoliceReportNumber: '',

  witnesses : [
    // {
    //   witnessName: "",
    //   witnessDescription: "",
    //   witnessCode: "",
    //   witnessAddress: "",
    //   witnessPhone: ""
    // }
  ],
  files : [
    {
      name: '',
      type: '',
      bytes: 0,
      data: '',

    }
  ],

  laserCaseNumber: '',
  laserCustomer : '',
  laserDoctorName: '',
  laserProcedureName: '',
  laserPatientReferenceNumber: '',
  laserEveryoneWearingProtection: false,
  laserWasAnyoneInjured: false,
  laserSafetyOfficer: '',
  laserDeputySafetyOfficer: '',
  laserAccessoriesAndFibers: '',
  laserWorkOrderNumber : '',
  assetList: [
    {
      assetId: '',
      assetNumber: '',
      assetModelName: '',
      assetSerialNumber: ''
    }
  ]

}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const medical = () => (
  <div className="row" style={{padding: "1em"}}>
  <ZgoTextInput label="Who was Injured?" name="whoWasInjured" type="text" placeholder="Jon Doe" />
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

 const IncidentReport = (props) => {
  
  incidentType = props.type

  let sigpad = {}

  const [isInjured, setIsInjured] = React.useState(false)
  const [policeReportFiled, setPoliceReportFiled] = React.useState(false)
  const [damagedOtherVehicle, setDamagedOtherVehicle] = React.useState(false)
  const [differentDriver, setDifferentDriver] = React.useState(false)
  const [modal, setModal] = React.useState(false)
  const [modal2, setModal2] = React.useState(false)
  const [witnesses, setWitnesses] = React.useState([])
  
  let selectedFiles = []

  const onSubmitFiles = () => {
    console.log('selected files', selectedFiles)
    let data = new FormData();
    selectedFiles.map(f => data.append('file', f))
    console.log('data value', data)
    console.log('sumbit values', data.values())
    console.log('submit keys', data.keys())
  }

  const handleFileChange = (e) => {
    const fileElem = document.getElementById("fileElem"),
          fileList = document.getElementById("fileList");

      if (!fileElem.files.length) {
        fileList.innerHTML = "<p>No files selected!</p>";
      } else {
        fileList.innerHTML = "";
        const list = document.createElement("ul");
        list.className = "list-group"
        fileList.appendChild(list);
        for (let i = 0; i < fileElem.files.length; i++) {
          selectedFiles.push(fileElem.files[i])
          const li = document.createElement("li");
          li.className = "list-group-item"
          list.appendChild(li);

          if (fileElem.files[i].type.includes("image")) {

            const img = document.createElement("img");
            img.src = URL.createObjectURL(fileElem.files[i]);

            img.height = 75;
            img.width = 75
            img.onload = function() {
              URL.revokeObjectURL(this.src);
            }
            img.className = "img-fluid"
            li.appendChild(img);
          } else {
            const div = document.createElement("div")
            div.className = "purple-gradient"
            li.appendChild(div)
          }

          const info = document.createElement("span");
          info.className="file-info"
          info.innerHTML = fileElem.files[i].name + " : " + formatBytes(fileElem.files[i].size);
          li.appendChild(info);

          const del = document.createElement("span")
          del.className = "cursor"
          del.innerHTML = "<i class='fa fa-trash error'></i>"
          del.style.float = "right"
          del.onclick = (function() {
            list.removeChild(li);
          })
          li.appendChild(del);
        }
      }
  }

  const toggle = () => setModal(!modal)

  const toggle2 = () => setModal2(!modal2)

  const handleFileSelect = () => {
    var fileElem = document.getElementById("fileElem")
    fileElem.click()
  }

   return (
     <div>
       <h1 className="cursor" style={{marginTop: "1.25rem"}} onClick={() => {props.cb("")}}><i className="fa fa-arrow-left"></i> Incident Report</h1>
       <br />
       <Formik
         initialValues={initialState}
         validate={validate}
         onSubmit={(values, { setSubmitting }) => {
           setTimeout(() => {
            onSubmitFiles()
             values.employeeSignature = trim(sigpad)
             values.witnesses = witnesses;
             if (sigpad.isEmpty()) {
               setSubmitting(false)
               return false
             }
             
             console.log(values)
             setSubmitting(false)
           }, 400)
         }}
       >
         {({ isSubmitting, values }) => (
         <Form>
           <div className="container">
           <div className="card w-100" style={{padding: "1em"}}>
                <div className="row">
                    <h2 style={{textAlign: "center", width: "100%", marginTop: "1.25rem"}}>General Information</h2>
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
                    {props.type === "personalInjury" ? (
                      <div className="card w-100" style={{padding: "1em"}}>
                          <h2 style={{textAlign: "center", width: "100%", marginTop: "1.25rem"}}>Medical Information</h2>
                          {medical()}
                      </div>
                    ) : null }



                    {props.type === "vehicleAccident" ? (
                      <div className="card w-100" style={{padding: "1em"}}>
                        <div className="row">
                        <h2 style={{textAlign: "center", width: "100%", marginTop: "1.25rem"}}>Vehicle Information</h2>
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


                    {props.type === "propertyDamage" ? (
                      <div className="card w-100" style={{padding: "1em"}}>
                          <h2 style={{textAlign: "center", width: "100%", marginTop: "1.25rem"}}>Property Damage Information</h2>
                          <div className="row">
                          <ZgoTextInput label="What was Damaged?" name="whatWasDamagedOrStolen" type="text" placeholder="" />
                          <ZgoCheckbox name="damageLossOrTheftPoliceReportFiled" cb={() => {values.damageLossOrTheftPoliceReportFiled = !values.damageLossOrTheftPoliceReportFiled; setPoliceReportFiled(!policeReportFiled)}}>
                            Was a police report filed?
                          </ZgoCheckbox>
                          {policeReportFiled ? <ZgoTextInput label="Police Report #" name="damageLossOrTheftPoliceReportNumber" type="text" placeholder="1234567890R" /> : null}
                          </div>
                      </div>
                    ) : null }


                    {props.type === "theft" ? (
                      <div className="card w-100" style={{padding: "1em"}}>
                          <h2 style={{textAlign: "center", width: "100%", marginTop: "1.25rem"}}>Theft Information</h2>
                          <div className="row">
                          <ZgoTextInput label="What was stolen?" name="whatWasDamagedOrStolen" type="text" placeholder="" />
                          <ZgoCheckbox name="damageLossOrTheftPoliceReportFiled" cb={() => {values.damageLossOrTheftPoliceReportFiled = !values.damageLossOrTheftPoliceReportFiled; setPoliceReportFiled(!policeReportFiled)}}>
                            Was a police report filed?
                          </ZgoCheckbox>
                          {policeReportFiled ? <ZgoTextInput label="Police Report #" name="damageLossOrTheftPoliceReportNumber" type="text" placeholder="1234567890R" /> : null}
                          </div>
                      </div>
                    ) : null }


{props.type === "laser" ? (
                      <div className="card w-100" style={{padding: "1em"}}>
                          <h2 style={{textAlign: "center", width: "100%", marginTop: "1.25rem"}}>Laser / Non Laser Information</h2>
                          <div className="row">
                            <ZgoTextInput label="Case Number" name="laserCaseNumber" type="text" placeholder="" />
                            <ZgoTextInput label="Work Order #" name="laserWorkOrderNumber" type="text" placeholder="" />
                            <ZgoTextInput label="Customer" name="laserCustomer" type="text" placeholder="" />
                            <ZgoTextInput label="Doctor's Name" name="laserDoctorName" type="text" placeholder="" />
                            <ZgoTextInput label="Procdure Name" name="laserProcedureName" type="text" placeholder="" />
                            <ZgoTextInput label="Patient Reference #" name="laserPatientReferenceNumber" type="text" placeholder="" />
                            <ZgoTextInput label="Laser Safety Officer" name="laserSafetyOfficer" type="text" placeholder="Jane Doe" />
                            <ZgoTextInput label="Deputy LSO" name="laserDeputySafetyOfficer" type="text" placeholder="Jane Doe" />

                            <ZgoTextArea name="laserAccessoriesAndFibers" label="Accessories and Fibers ( list asset and serial numbers for accessories / lot numbers for fibers )" />

                            <ZgoCheckbox name="fortecEquipmentPatientInjured" cb={() => {values.fortecEquipmentPatientInjured = !values.fortecEquipmentPatientInjured; setIsInjured(!isInjured);}}>
                              Was anyone injured?
                            </ZgoCheckbox>
                            {isInjured ? medical() : null}
                            <ZgoCheckbox name="laserEveryoneWearingProtection" cb={() => {values.laserEveryoneWearingProtection = !values.laserEveryoneWearingProtection;}}>
                              Was everyone wearing protection?
                            </ZgoCheckbox>

                            <MDBContainer>
                              <MDBBtn onClick={toggle2}>Modal</MDBBtn>
                              <MDBModal isOpen={modal2} toggle={toggle2}>
                                <MDBModalHeader toggle={toggle2}>MDBModal title</MDBModalHeader>
                                <MDBModalBody>
                                  (...)
                                </MDBModalBody>
                                <MDBModalFooter>
                                  <MDBBtn color="secondary" onClick={toggle2}>Close</MDBBtn>
                                  <MDBBtn color="primary">Save changes</MDBBtn>
                                </MDBModalFooter>
                              </MDBModal>
                            </MDBContainer>
                          </div>
                      </div>
                    ) : null }


                    {props.type === "equipmentDamage" ? (
                      <>
                      <div className="card w-100" style={{padding: "1em"}}>
                          <h2 style={{textAlign: "center", width: "100%", marginTop: "1.25rem"}}>Equipment Information</h2>
                          <div className="row">
                          <ZgoTextInput label="Equipment Type" name="fortecEquipmentType" type="text" placeholder="" />
                          <ZgoTextInput label="Serial #" name="fortecEquipmentSerialNumber" type="text" placeholder="" />
                          <ZgoTextInput label="Fiber Type" name="fortecEquipmentFiberType" type="text" placeholder="" />
                          <ZgoTextInput label="Lot number" name="fortecEquipmentLotNumber" type="text" placeholder="" />
                          <ZgoCheckbox name="fortecEquipmentPatientInjured" cb={() => {values.fortecEquipmentPatientInjured = !values.fortecEquipmentPatientInjured; setIsInjured(!isInjured);}}>
                            Was anyone injured?
                          </ZgoCheckbox>
                          </div>
                      </div>
                      {isInjured ? (
                            <div className="card w-100 mt-5" style={{padding: "1em"}}>
                                <h2 style={{textAlign: "center", width: "100%", marginTop: "1.25rem"}}>Medical Information</h2>
                                {medical()}
                            </div>
                          ) : null }
                      </>
                    ) : null }

                    {props.type === "equipmentInjury" ? (
                      <>
                      <div className="card w-100" style={{padding: "1em"}}>
                          <h2 style={{textAlign: "center", width: "100%", marginTop: "1.25rem"}}>Equipment Information</h2>
                          <div className="row">
                            <ZgoTextInput label="Equipment Type" name="fortecEquipmentType" type="text" placeholder="" />
                            <ZgoTextInput label="Serial #" name="fortecEquipmentSerialNumber" type="text" placeholder="" />
                            <ZgoTextInput label="Fiber Type" name="fortecEquipmentFiberType" type="text" placeholder="" />
                            <ZgoTextInput label="Lot number" name="fortecEquipmentLotNumber" type="text" placeholder="" />
                          </div>
                      </div>

                      <div className="card w-100 mt-5" style={{padding: "1em"}}>
                        <h2 style={{textAlign: "center", width: "100%", marginTop: "1.25rem"}}>Medical Information</h2>
                        {medical()}
                      </div>
                      </>
                    ) : null }

                   
                   <br/>
                   <br/>
                    <div className="card w-100" style={{padding: "1em"}}>
                    <div className="row w-100">
                        <h2 style={{textAlign: "center", width: "100%", marginTop: "1.25rem"}}>Write a Detailed Description</h2>
                        <ZgoTextArea name="detailedDescription" label="" />
                    </div>
                    </div>
                    <br />
                   <br />

                    <div className="card" style={{padding: "1em"}}>
                    <h2 style={{textAlign: "center", width: "100%", marginTop: "1.25rem"}}>Witnesses</h2>
                   
                   
                    <MDBContainer>
                      <MDBBtn color="primary" onClick={toggle}>Add Witness</MDBBtn>
                      <MDBListGroup>
                        
                      {witnesses.length > 0 ? witnesses.map( (w, i) => (
                        <MDBListGroupItem key={i}>
                          <span style={{float: "right"}} onClick={() => setWitnesses(witnesses.filter((x, idx) => idx !== i))}><i className="fa fa-trash error"></i></span>
                          <p><strong>{w.witnessName}</strong>, {w.witnessCode}, {w.witnessAddress}, {w.witnessPhone}</p>
                          <p>"{w.witnessDescription}"</p>
                        </MDBListGroupItem>
                      )) : null}
                      
                      </MDBListGroup>
                    </MDBContainer>

                    </div>
                   <br />
                   <br />

                   <div className="card" style={{padding: "1em"}}>
                    <h2 style={{textAlign: "center", width: "100%", marginTop: "1.25rem"}}>Add Files</h2>
                    <div className="container-fluid">
                    <div className="row">
                                <div className="col">
                                  <input
                                    style={{display: "none"}}
                                    type="file"
                                    id="fileElem"
                                    accept="*"
                                    multiple
                                    onChange={handleFileChange}
                                  />
                                  <button type="button" className="btn btn-primary" id="fileSelect" onClick={handleFileSelect}>Select files</button> 
                                  <div id="fileList">
                                    <p>No files selected...</p>
                                  </div>
                                </div>
                              </div>
                              </div>
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

       <MDBModal isOpen={modal} toggle={toggle} size="fluid" fullHeight position="top">

                      <Formik
                            initialValues={witnessState}
                            validate={validateWitnesses}
                            onSubmit={(values2, { setSubmitting }) => {
                              setTimeout(() => {    
                                console.log(values2)
                                setWitnesses(witnesses.concat(values2))
                                setSubmitting(false)
                                toggle()
                              }, 400)
                            }}
                          >
                            {({ isSubmitting2, values2 }) => (
                              <>
                        <MDBModalHeader toggle={toggle}>Add a Witness</MDBModalHeader>
                        <MDBModalBody>
                          <MDBContainer>
                          
                            <Form>
                              
                              <div className="row">

                                <ZgoTextInput name="witnessName" placeholder="Jane Doe" type="text" label="Name" />
                                <ZgoTextInput name="witnessAddress" placeholder="123 Incident St" type="text" label="Address" />
                                <ZgoTextInput name="witnessPhone" placeholder="2347039148" type="tel" label="Phone" />

                                <ZgoSelect label="Code" name="witnessCode">
                                    <option value="">Select</option>
                                    <option value="employee">Employee</option>
                                    <option value="pedestrian">Pedestrian</option>
                                    <option value="client">Client</option>
                                    <option value="witness">Witness</option>
                                  </ZgoSelect>

                                <ZgoTextArea name="witnessDescription" label="Description" />
                                
                              </div>
                              <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
                              <MDBBtn color="primary" type="submit" disabled={isSubmitting2}>Save Witness</MDBBtn>
                            </Form>
                            
                          </MDBContainer>

                        </MDBModalBody>
                              </>
                        )}
                        </Formik>
                      </MDBModal>
     </div>
   );
 };

 export default IncidentReport
