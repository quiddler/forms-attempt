import React, { useState } from 'react';

const ZgoCheckbox = (props: any) => {


    const [checked, setChecked] = useState(false)

    return (
        <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="form-check">
                <input
                    className="form-control form-check-input"
                    id={props.text}
                    name={props.text}
                    type="checkbox"
                    checked={checked}
                />
                <label className="form-check-label" onClick={() => {setChecked(!checked); props.cb(); } }>{props.text}</label>
            </div>
        
        </div>
)}


export default ZgoCheckbox