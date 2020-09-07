import React from 'react'
import { MDBDatePicker } from 'mdbreact'

const ZgoDatePicker = (props: any) => {

    return (
        <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
           <label htmlFor={props.text}>{props.text}</label>
            <MDBDatePicker
                max={new Date().toISOString().split('T')[0]}
                id={props.text}
                getValue={(d: Date)=> props.cb(d)}  />
        </div>
    )
}

export default ZgoDatePicker