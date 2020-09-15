import React from 'react'
import { MDBContainer, MDBRow } from "mdbreact";

const BubbleSelect = (props: any) => {
    
    return (
    <MDBContainer fluid className="mt-5">
      <MDBRow className="mt-4 text-center">
      <div className="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
          <div className="young-passion-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1  cursor" 
          onClick={() => props.cb("personalInjury")}
          style={{display: "table"}}>
              
              <h5 className="mb-0" style={{display: "table-cell", verticalAlign: "middle"}}><b>Personal Injury</b></h5>
          </div>
          
        </div>
        <div className="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
          <div className="sunny-morning-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1  cursor" 
          onClick={() => props.cb("vehicleAccident")}
          style={{display: "table"}}>
              <h5 className="mb-0" style={{display: "table-cell", verticalAlign: "middle"}}><b>Vehicle Accident</b></h5>
          </div>
          
        </div>
        <div className="mb-4 col-6 col-sm-6 col-md-4 col-lg-3 ">
          <div className="dusty-grass-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1 cursor" 
          onClick={() => props.cb("propertyDamage")}
          style={{display: "table"}}>
              <h5 className="mb-0" style={{display: "table-cell", verticalAlign: "middle"}}><b>Property Damage</b></h5>
          </div>
          
        </div>
        <div className="mb-4 col-6 col-sm-6 col-md-4 col-lg-3 ">
          <div className="near-moon-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1 cursor" 
          onClick={() => props.cb("equipmentDamage")}
          style={{display: "table"}}>
              <h5 className="mb-0" style={{display: "table-cell", verticalAlign: "middle"}}><b>Equipment Damage</b></h5>
          </div>
          
        </div>
        <div className="mb-4 col-6 col-sm-6 col-md-4 col-lg-3 ">
          <div className="night-fade-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1 cursor" 
          onClick={() => props.cb("equipmentInjury")}
          style={{display: "table"}}>
              <h5 className="mb-0" style={{display: "table-cell", verticalAlign: "middle"}}><b>Equipment Injury</b></h5>
          </div>
          
        </div>
        <div className="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
          <div className="aqua-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1 cursor" 
          onClick={() => props.cb("theft")}
          style={{display: "table"}}>
              <h5 className="mb-0" style={{display: "table-cell", verticalAlign: "middle"}}><b>Theft</b></h5>
          </div>
          
        </div>
        <div className="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
          <div className="rare-wind-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1 cursor" 
          onClick={() => props.cb("other")}
          style={{display: "table"}}>
              <h5 className="mb-0" style={{display: "table-cell", verticalAlign: "middle"}}><b>Other</b></h5>
          </div>
          
        </div>
      </MDBRow>
    </MDBContainer >
)}

export default BubbleSelect
