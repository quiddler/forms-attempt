import React from 'react';
import {useField} from 'formik'

const ZgoCheckbox = ( props: any) => {
    // We need to tell useField what type of input this is
    // since React treats radios and checkboxes differently
    // than inputs/select/textarea.
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    const [checked, setChecked] = React.useState(false)
    return (
      <div className="row w-100">
      <div className="col col-12">
     
        <div className="form-check" style={{textAlign:"center"}}>
        {meta.touched && meta.error ? (
          <div style={{position:"absolute", textAlign:"center", width:"100%", top:"24px"}} className="error">{meta.error}</div>
        ) : null}
          <input checked={checked} className="form-control form-check-input" type="checkbox" {...field} />
          <label className="form-check-label" onClick={() => {setChecked(!checked); props.cb(); } }>{props.children}</label>
      </div>
      </div>
        </div>
    );
  };

export default ZgoCheckbox