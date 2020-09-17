import React from 'react';
import './App.css'
import SignupForm from './components/test-form-2';
import BubbleSelect from './components/bubble-select';

function App() {

  const [form, setForm] = React.useState("")

  if (form !== "") {
    return (
      <div className="container">
        <SignupForm type={form}></SignupForm>
      </div>)
  } else {
    return (
      <div className="container">
        <BubbleSelect cb={(ans: string) => setForm(ans)}></BubbleSelect>
      </div>)
  }
}

export default App;
