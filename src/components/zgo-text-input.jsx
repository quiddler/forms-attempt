import React from 'react';
import { useField } from 'formik';
import { MDBInput } from 'mdbreact'

const ZgoTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
        <label htmlFor={props.id || props.name}>{label}</label>
        <MDBInput className="form-control" {...field} {...props} icon={props.icon} />
        {meta.touched && meta.error ? (
          <div style={{position:"absolute", textAlign:"right", width:"90%", top:"0px" }} className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  export default ZgoTextInput
