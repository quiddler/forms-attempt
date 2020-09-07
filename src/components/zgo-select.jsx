import React from 'react'
import {useField} from 'formik'

const ZgoSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
        <label style={{marginBottom:"16px"}} htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} className="form-control" />
        {meta.touched && meta.error ? (
          <div style={{position:"absolute", textAlign:"right", width:"90%", top:"0px"}} className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  export default ZgoSelect