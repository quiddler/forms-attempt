import React from 'react'
import { MDBDatePickerV5 } from 'mdbreact'

const ZgoDatePicker = (props: any) => {

    return (
        <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
           <label htmlFor={props.text}>{props.text}</label>
            <MDBDatePickerV5
                id={props.text}
                getValue={(d: Date)=> props.cb(d)}  />
        </div>
    )
}

export default ZgoDatePicker