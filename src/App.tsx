import React from 'react';
import './App.css'
import SignupForm from './components/test-form-2';
import BubbleSelect from './components/bubble-select';

function App() {

  const [form, setForm] = React.useState(false)

  if (form) {
    return (
      <div className="container">
        <SignupForm></SignupForm>
      </div>)
  } else {
    return (
      <div className="container">
        <BubbleSelect cb={(ans: boolean) => setForm(ans)}></BubbleSelect>
      </div>)
  }
}

export default App;
