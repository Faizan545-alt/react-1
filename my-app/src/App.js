// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import Alert from './componenets/Alert';
import About from './componenets/About';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {

 const [mode,setMode]=useState('light')         //wether dark mode is enable or not
 const [alert,setAlert]=useState(null);

 const showAlert=(message,type)=>{
setAlert({

msg:message,
type:type

})

setTimeout(()=>{

setAlert(null)

},2000)

 }

 const toggleMode = ()=> {

  if(mode ==='light'){
    setMode('dark')

    document.body.style.backgroundColor='#042743'
    showAlert('dark mode has been enabled','success')
    document.title='TextUtils-Dark Mode'

    //how we can flash

    // setInterval(() => {
    //   document.title='Text Utils is Amazing'
    // }, 2000);
    
    // setInterval(() => {
    //   document.title='Install TexUtils Mode'
    // }, 1500);
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert('light mode has been enabled','success')
    document.title='TextUtils-light Mode'

  }

  

 }

  return (

    <>
 
{/* <Navbar title= "textUtilities" data ="abouttextutilities" />  */}
<Router>
  <Navbar title= "textUtilities" mode={mode}  toggleMode={toggleMode} /> 
   <Alert alert={alert}     />
      
     <div className="container my-4">

      <Routes>
          <Route exact path="/about"  element= {<About />}>      </Route>
    
          <Route exact path="/textform"       element= { <TextForm  heading="Enter the text to analyze"  mode={mode}  showAlert={showAlert} />}   >   </Route>
     
      </Routes>
 </div>
      </Router>
   </>
          // if u didnot pass values then default props can use 
          //  exact to show after click exact one not different because when u not use this react  show different som etime 
  );
}

export default App;
