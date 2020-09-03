import React from 'react';
import './App.css'
import Basic from './components/basic-form'
import Test from './components/test-form'
import ZgoDatePicker from './components/zgo-date-picker'
import SignupForm from './components/test-form-2';

function App() {
  return (
    <div className="container">
      <Test></Test>
      
      <Basic></Basic>

      <ZgoDatePicker cb={(e: Date) => console.log(e)}/>

      <SignupForm></SignupForm>
    </div>
  );
}

export default App;
