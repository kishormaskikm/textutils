import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import About from './component/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert , setAlert] = useState(null);
   
  const showAlert = (message , type) =>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(()=>{
      setAlert(null);

    },1500 );
  }
 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode enabled " , "success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("dark mode enabled " , "success");
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Switch>
              <Route exact path="/about">
                <About mode={mode}/>
              </Route>
              <Route exact  path="/">
                  <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>
              </Route> 
        </Switch>
      </div>
    </Router>
   
    </> 
  );
}

export default App;