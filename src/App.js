import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { useState } from 'react';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
let name='Ifrah'
document.title='Ifrahsss-content'
function App() {
  // To check whether dark mode enabled or not
  const[mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);
  
const showAlert=(message, type)=>{
  setAlert({
  msg: message,
  type:type
})
setTimeout(()=>{
setAlert(null);
}, 3000);
}
  const toggleMode=()=>{
    if(mode=='light'){
      setMode('dark')
      document.body.style.backgroundColor='rgb(21, 12, 44)'
      showAlert('Dark mode has been enabled','Success')
      //  document.title='Ifrahsss|content analysis'
    }
    else{
      setMode('light')  
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled','Success')
      // document.title='Ifrahs- Light Mode'
      // document.title='Ifrahsss|content analysis'
    }
  }
  return (
   <>
   <Router>
   <Navbar title= 'Ifrahsss' aboutText= 'About Us' mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container my-3 mb-3'>

    <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} logic='Try Ifrahsss website for better content analysis' mode={mode}/>
          </Route>
        </Switch>
        </div>
        </Router>

{/* <About/> */}
   </>
  );
}
export default App;
