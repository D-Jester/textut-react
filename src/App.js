import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Textform from './components/Textform';
import React,{ useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  //alert arrtibutes variable
  const [alert,setalert]=useState(null);
  //variable for dark mode
  const [mode,setmode]=useState("light");

  //functiont o show alert field
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  //function to toggle mode
  const toggleMode=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="#343a40"
      showAlert("Dark mode has been enabled","success")
     }else{
      setmode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")
     }
  }

  return (
    <Router>
    <Navbar title="TextUT" first="Home" second="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div>
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />     
          
          <Route exact path="/" 
          element={<Textform showAlert={showAlert} header="Text Field" mode={mode}/>}/>
    </Routes>
    </div>
    {/* <About mode={mode}/> */}
    </Router>
  );
}

export default App;
