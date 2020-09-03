import React from 'react'
import { MDBDatePicker } from 'mdbreact'

const ZgoDatePicker = (props: any) => {
    return (
        <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
           <label htmlFor={props.text}>{props.text}</label>
            <MDBDatePicker 
                style={{position: "absolute", top:-20}} 
                id={props.text} 
                inline
                disablePast
                getValue={(d: Date)=> props.cb(d)}  />
        </div>
    )
}

export default ZgoDatePicker