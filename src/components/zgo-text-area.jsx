import React from 'react';
import { useField } from 'formik';

const ZgoTextArea = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <div className="col col-12" style={{padding : "1em"}}>
        <div className="form-group">
            <label htmlFor={props.id || props.name}>
            {label}
            </label>
            <textarea
            {...field}
            className="form-control"
            id={props.id || props.name}
            rows="5"
            />
        </div>
        {meta.touched && meta.error ? (
          <div style={{position:"absolute", textAlign:"right", width:"90%", top:"0px" }} className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  export default ZgoTextArea