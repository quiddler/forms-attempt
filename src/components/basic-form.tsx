import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {MDBInput} from 'mdbreact'
 
 const initialState = {

    employeeName: '',
    employeePhone: '',
    employeeBaseLocation: '',
    employeeDateWorkBegan: null,
    employeeTimeWorkBegan: '',
    employeeSignature: '',
    employeeDateSigned: null,

    incidentDate: null,
    incidentTime: '',
    incidentAddress: '',
    incidentCity: '',
    incidentState: '',
    incidentZipCode: '',
    incidentType: '',

    medicalProvider: '',
    medicalAddress: '',
    medicalCity: '',
    medicalState: '',
    medicalZipCode: '',
    medicalPhone: '',

    fortecVehicleNumber : '',
    fortecVehicleLicensePlate: '',
    fortecVehicleDamages: '',
    fortecVehicleAnyoneInjured: '',
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
    otherVehicleYear: null,
    otherVehicleLicenseNumber : '',
    otherVehicleStateRegistered: '',

    damageLossOrTheft : false,
    damageLossOrTheftWhatHappened: '',
    damageLossOrTheftPoliceReportFiled: false,

    detailedDescription : ''
}

 const Basic = () => (
   <div>
     <h1>Incident Form</h1>
     <MDBInput label="Material unchecked" type="checkbox" id="checkbox1" />
     <Formik
       initialValues={initialState}
       validate={values => {

         const errors: any = {};

         if (!values.employeeName) errors.employeeName = 'Required';
         if (!values.employeePhone) errors.employeePhone = 'Required'
         if (!values.employeeBaseLocation) errors.employeeBaseLocation = 'Required'
         if (!values.employeeDateWorkBegan) errors.employeeDateWorkBegan = 'Required'
         if (!values.employeeTimeWorkBegan) errors.employeeTimeWorkBegan = 'Required'
         if (!values.employeeSignature) errors.employeeSignature = 'Required'
         if (!values.employeeDateSigned) errors.employeeDateSigned = 'Required'

         if (!values.incidentDate) errors.incidentDate = 'Required'
         if (!values.incidentTime) errors.incidentTime = 'Required'
         if (!values.incidentAddress) errors.incidentAddress = 'Required'
         if (!values.incidentCity) errors.incidentCity = 'Required'
         if (!values.incidentState) errors.incidentState = 'Required'
         if (!values.incidentZipCode) errors.incidentZipCode = 'Required'
         if (!values.incidentType) errors.incidentType = 'Required'

         if (!values.medicalProvider) errors.medicalProvider = 'Required'
         if (!values.medicalAddress) errors.medicalAddress = 'Required'
         if (!values.medicalCity) errors.medicalCity = 'Required'
         if (!values.medicalState) errors.medicalState = 'Required'
         if (!values.medicalZipCode) errors.medicalZipCode = 'Required'
         if (!values.medicalPhone) errors.medicalPhone = 'Required'


         if (!values.fortecVehicleNumber) errors.fortecVehicleNumber = 'Required'
         if (!values.fortecVehicleLicensePlate) errors.fortecVehicleLicensePlate = 'Required'
         if (!values.fortecVehicleDamages) errors.fortecVehicleDamages = 'Required'
         if (values.fortecVehiclePoliceReportFiled && !values.fortecVehiclePoliceReportNumber) errors.fortecVehiclePoliceReportNumber = 'Required'


         if (!values.fortecEquipmentType) errors.fortecEquipmentType = 'Required'
         if (!values.fortecEquipmentSerialNumber) errors.fortecEquipmentSerialNumber = 'Required'
         if (!values.fortecEquipmentFiberType) errors.fortecEquipmentFiberType = 'Required'
         if (!values.fortecEquipmentLotNumber) errors.fortecEquipmentLotNumber = 'Required'

        if (values.damagedOtherVehicle) {
            if (!values.otherVehicleOwner) errors.otherVehicleOwner = 'Required'
            if (!values.otherVehicleOwnerAddress) errors.otherVehicleOwnerAddress = 'Required'
            if (!values.otherVehicleOwnerCity) errors.otherVehicleOwnerCity = 'Required'
            if (!values.otherVehicleOwnerState) errors.otherVehicleOwnerState = 'Required'
            if (!values.otherVehicleOwnerZipCode) errors.otherVehicleOwnerZipCode = 'Required'
            if (!values.otherVehicleOwnerPhone) errors.otherVehicleOwnerPhone = 'Required'

            if (values.driverDifferentThanOwner) {
                if (!values.otherVehicleDriver) errors.otherVehicleDriver = 'Required'
                if (!values.otherVehicleDriverAddress) errors.otherVehicleDriverAddress = 'Required'
                if (!values.otherVehicleDriverCity) errors.otherVehicleDriverCity = 'Required'
                if (!values.otherVehicleDriverState) errors.otherVehicleDriverState = 'Required'
                if (!values.otherVehicleDriverZipCode) errors.otherVehicleDriverZipCode = 'Required'
                if (!values.otherVehicleDriverPhone) errors.otherVehicleDriverPhone = 'Required'
            }
            
            if (!values.otherVehicleInsuranceCompany) errors.otherVehicleInsuranceCompany = 'Required'
            if (!values.otherVehiclePolicyNumber) errors.otherVehiclePolicyNumber = 'Required'
            if (!values.otherVehicleDamages) errors.otherVehicleDamages = 'Required'
            if (!values.otherVehicleMake) errors.otherVehicleMake = 'Required'
            if (!values.otherVehicleModel) errors.otherVehicleModel = 'Required'
            if (!values.otherVehicleYear) errors.otherVehicleYear = 'Required'
            if (!values.otherVehicleLicenseNumber) errors.otherVehicleLicenseNumber = 'Required'
            if (!values.otherVehicleStateRegistered) errors.otherVehicleStateRegistered = 'Required'
        }

        if (values.damageLossOrTheft) {
            if (!values.damageLossOrTheftWhatHappened) errors.damageLossOrTheftWhatHappened = 'Required'
            if (!values.damageLossOrTheftPoliceReportFiled) errors.damageLossOrTheftPoliceReportFiled = 'Required'
        }
        
        if (!values.detailedDescription) errors.detailedDescription = 'Required'

         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
           <Form>
           <div className="container-fluid form-group">
               <div className="row">
                    <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                        <label htmlFor="employeeName">Your Name:</label>
                        <Field type="text" name="employeeName" className="form-control"/>
                        <ErrorMessage className="error" name="employeeName" component="div" />
                    </div>
                    <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                        <label htmlFor="employeePhone">Phone:</label>
                        <Field type="phone" name="employeePhone" className="form-control"/>
                        <ErrorMessage className="error" name="employeePhone" component="div" />
                    </div>
                    <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                        <label htmlFor="employeeBaseLocation">Base Location:</label>
                        <Field type="text" name="employeeBaseLocation" className="form-control" />
                        <ErrorMessage className="error" name="employeeBaseLocation" component="div" />
                    </div>
                    <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                        <label htmlFor="employeeDateWorkBegan">Date Work Began:</label>
                        <Field type="date" name="employeeDateWorkBegan" className="form-control" />
                        <ErrorMessage className="error" name="employeeDateWorkBegan" component="div" />
                    </div>
                    <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                        <label htmlFor="employeeTimeWorkBegan">Time Work Began:</label>
                        <Field type="time" name="employeeTimeWorkBegan"  className="form-control" />
                        <ErrorMessage className="error" name="employeeTimeWorkBegan" component="div" />
                    </div>
                    <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                        <label htmlFor="employeeSignature">Employee Signature:</label>
                        <Field type="text" name="employeeSignature" className="form-control"  />
                        <ErrorMessage className="error" name="employeeSignature" component="div" />
                    </div>

                    <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                        <label htmlFor="employeeDateSigned">Today's Date:</label>
                        <Field type="date" name="employeeDateSigned" className="form-control"  />
                        <ErrorMessage className="error" name="employeeDateSigned" component="div" />
                    </div>
                    <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                        <label htmlFor="incidentDate">Date Incident Ocurred:</label>
                        <Field type="date" name="incidentDate" className="form-control"  />
                        <ErrorMessage className="error" name="incidentDate" component="div" />
                    </div>

                    <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                        <label htmlFor="incidentTime">Time Incident Occured:</label>
                        <Field type="time" name="incidentTime" className="form-control"/>
                        <ErrorMessage className="error" name="incidentTime" component="div" />
                    </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="incidentAddress">Address:</label>
                <Field type="text" name="incidentAddress"  className="form-control" />
                <ErrorMessage className="error" name="incidentAddress" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="incidentCity">City:</label>
                <Field type="text" name="incidentCity"  className="form-control"/>
                <ErrorMessage className="error" name="incidentCity" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="incidentState">State:</label>
                <Field type="text" name="incidentState"  className="form-control"/>
                <ErrorMessage className="error" name="incidentState" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="incidentZipCode">Zip Code:</label>
                <Field type="number" name="incidentZipCode"  className="form-control"/>
                <ErrorMessage className="error" name="incidentZipCode" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="incidentType">Type:</label>
                <Field type="text" name="incidentType"  className="form-control"/>
                <ErrorMessage className="error" name="incidentType" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="medicalProvider">Medical Provider:</label>
                <Field type="text" name="medicalProvider"  className="form-control"/>
                <ErrorMessage className="error" name="medicalProvider" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="medicalAddress">Address:</label>
                <Field type="text" name="medicalAddress" className="form-control" />
                <ErrorMessage className="error" name="medicalAddress" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="medicalCity">City:</label>
                <Field type="text" name="medicalCity"  className="form-control"/>
                <ErrorMessage className="error" name="medicalCity" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="medicalState">State:</label>
                <Field type="text" name="medicalState"  className="form-control"/>
                <ErrorMessage className="error" name="medicalState" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="medicalZipCode">Zip Code:</label>
                <Field type="number" name="medicalZipCode" className="form-control" />
                <ErrorMessage className="error" name="medicalZipCode" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="medicalPhone">Phone:</label>
                <Field type="phone" name="medicalPhone" className="form-control" />
                <ErrorMessage className="error" name="medicalPhone" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="fortecVehicleNumber">Fortec Vehicle Number:</label>
                <Field type="text" name="fortecVehicleNumber" className="form-control" />
                <ErrorMessage className="error" name="fortecVehicleNumber" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="fortecVehicleLicensePlate">License Plate:</label>
                <Field type="text" name="fortecVehicleLicensePlate" className="form-control" />
                <ErrorMessage className="error" name="fortecVehicleLicensePlate" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="fortecVehicleDamages">Damages:</label>
                <Field type="text" name="fortecVehicleDamages" className="form-control" />
                <ErrorMessage className="error" name="fortecVehicleDamages" component="div" />
                </div>




                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                    <div className="custom-control custom-checkbox">
                    <label htmlFor="fortecVehicleAnyoneInjured" className="custom-control-label">Anyone Injured:</label>
                        <Field type="checkbox" checked={initialState.fortecVehicleAnyoneInjured} name="fortecVehicleAnyoneInjured" className="custom-control-input"  />
                        
                        <ErrorMessage className="error" name="fortecVehicleAnyoneInjured" component="div" />
                    </div>
                    </div>


                    <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="fortecVehiclePoliceReportFiled">Police Report Filed:</label>
                <Field type="checkbox" name="fortecVehiclePoliceReportFiled"  className="custom-control-input"/>
                <ErrorMessage className="error" name="fortecVehiclePoliceReportFiled" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="fortecVehiclePoliceReportNumber">Police Report Number:</label>
                <Field type="text" name="fortecVehiclePoliceReportNumber" className="form-control" />
                <ErrorMessage className="error" name="fortecVehiclePoliceReportNumber" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="fortecVehicleEmployeeSited">Fortec Employee Sited:</label>
                <Field type="checkbox" name="fortecVehicleEmployeeSited" className="custom-control-input" />
                <ErrorMessage className="error" name="fortecVehicleEmployeeSited" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="fortecVehicleTowedAway">Vehicle Towed:</label>
                <Field type="checkbox" name="fortecVehicleTowedAway" className="custom-control-input" />
                <ErrorMessage className="error" name="fortecVehicleTowedAway" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="fortecEquipmentType">Equipment Type:</label>
                <Field type="text" name="fortecEquipmentType" className="form-control" />
                <ErrorMessage className="error" name="fortecEquipmentType" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="fortecEquipmentSerialNumber">Equipment Serial Number:</label>
                <Field type="text" name="fortecEquipmentSerialNumber" className="form-control" />
                <ErrorMessage className="error" name="fortecEquipmentSerialNumber" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="fortecEquipmentFiberType">Fiber Type:</label>
                <Field type="text" name="fortecEquipmentFiberType" className="form-control" />
                <ErrorMessage className="error" name="fortecEquipmentFiberType" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="fortecEquipmentLotNumber">Lot Number:</label>
                <Field type="text" name="fortecEquipmentLotNumber" className="form-control" />
                <ErrorMessage className="error" name="fortecEquipmentLotNumber" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="fortecEquipmentPatientInjured">Patient Injured:</label>
                <Field type="checkbox" name="fortecEquipmentPatientInjured" className="form-control" />
                <ErrorMessage className="error" name="fortecEquipmentPatientInjured" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="damagedOtherVehicle">Damaged Other's Vehicle:</label>
                <Field type="checkbox" name="damagedOtherVehicle"  className="form-control"/>
                <ErrorMessage className="error" name="damagedOtherVehicle" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleOwner">Vehicle Owner:</label>
                <Field type="text" name="otherVehicleOwner"  className="form-control"/>
                <ErrorMessage className="error" name="otherVehicleOwner" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleOwnerAddress">Address:</label>
                <Field type="text" name="otherVehicleOwnerAddress" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleOwnerAddress" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleOwnerCity">City:</label>
                <Field type="text" name="otherVehicleOwnerCity" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleOwnerCity" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleOwnerState">State:</label>
                <Field type="text" name="otherVehicleOwnerState" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleOwnerState" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleOwnerZipCode">Zip Code:</label>
                <Field type="text" name="otherVehicleOwnerZipCode" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleOwnerZipCode" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleOwnerPhone">Phone:</label>
                <Field type="phone" name="otherVehicleOwnerPhone" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleOwnerPhone" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="driverDifferentThanOwner">Driver Different than Owner:</label>
                <Field type="checkbox" name="driverDifferentThanOwner" className="form-control" />
                <ErrorMessage className="error" name="driverDifferentThanOwner" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleDriver">Driver:</label>
                <Field type="text" name="otherVehicleDriver" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleDriver" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleDriverAddress">Address:</label>
                <Field type="text" name="otherVehicleDriverAddress" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleDriverAddress" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleDriverCity">City:</label>
                <Field type="text" name="otherVehicleDriverCity" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleDriverCity" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleDriverState">State:</label>
                <Field type="text" name="otherVehicleDriverState" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleDriverState" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleDriverZipCode">Zip Code:</label>
                <Field type="number" name="otherVehicleDriverZipCode" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleDriverZipCode" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleDriverPhone">Phone:</label>
                <Field type="phone" name="otherVehicleDriverPhone" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleDriverPhone" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleInsuranceCompany">Insurance Company:</label>
                <Field type="text" name="otherVehicleInsuranceCompany" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleInsuranceCompany" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehiclePolicyNumber">Policy Number:</label>
                <Field type="text" name="otherVehiclePolicyNumber" className="form-control" />
                <ErrorMessage className="error" name="otherVehiclePolicyNumber" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleDamages">Damages:</label>
                <Field type="text" name="otherVehicleDamages"  className="form-control"/>
                <ErrorMessage className="error" name="otherVehicleDamages" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleMake">Make:</label>
                <Field type="text" name="otherVehicleMake"  className="form-control"/>
                <ErrorMessage className="error" name="otherVehicleMake" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleModel">Model:</label>
                <Field type="text" name="otherVehicleModel" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleModel" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleYear">Year:</label>
                <Field type="date" name="otherVehicleYear" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleYear" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleLicenseNumber">License Number:</label>
                <Field type="text" name="otherVehicleLicenseNumber" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleLicenseNumber" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="otherVehicleStateRegistered">State Registered:</label>
                <Field type="text" name="otherVehicleStateRegistered" className="form-control" />
                <ErrorMessage className="error" name="otherVehicleStateRegistered" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="damageLossOrTheft">Damage, loss or theft occured:</label>
                <Field type="checkbox" name="damageLossOrTheft" className="form-control" />
                <ErrorMessage className="error" name="damageLossOrTheft" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="damageLossOrTheftWhatHappened">What Happened:</label>
                <Field type="text" name="damageLossOrTheftWhatHappened" className="form-control" />
                <ErrorMessage className="error" name="damageLossOrTheftWhatHappened" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="damageLossOrTheftPoliceReportFiled">Police Report Filed:</label>
                <Field type="checkbox" name="damageLossOrTheftPoliceReportFiled" className="form-control" />
                <ErrorMessage className="error" name="damageLossOrTheftPoliceReportFiled" component="div" />
                </div>

                <div className="col col-md-4 col-sm-6 col-12 col-lg-3">
                <label htmlFor="detailedDescription">Detailed Description:</label>
                <Field component="textarea" name="detailedDescription" className="form-control" />
                <ErrorMessage className="error" name="detailedDescription" component="div" />
                </div>
                </div>  
                </div>  
           <button type="submit" disabled={isSubmitting}>Submit</button>
           
         </Form>
       )}
     </Formik>
   </div>
 );
 
 export default Basic;