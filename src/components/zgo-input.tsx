import React from 'react'
import { MDBInput } from 'mdbreact';


const ZgoText = (props: any) => (
    <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
        <MDBInput label={props.text} icon={props.icon}
        className="form-control"
        id={props.key}
        name={props.key}
        type={props.type}
        onBlur={(e: any) => {props.formik.handleBlur(e); props.cb(e.target.value) }}
        onChange={props.formik.handleChange}
        />
    </div>
)

export default ZgoText
