import React from "react";
import { MDBTimePicker, MDBCol } from "mdbreact";


const TimePicker = (props: any) => (
      <MDBCol xs="12" md="4" sm="6" lg="3">
        <label htmlFor={props.id || props.name} style={{marginBottom:"15px", marginTop: "15px"}} >{props.text}</label>
        <MDBTimePicker id={props.id || props.name} getValue={(time: any) => props.cb(time)} className="form-control" />
      </MDBCol>
    );

export default TimePicker;