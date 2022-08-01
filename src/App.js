import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react'
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showalert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const ToggleMode =() =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showalert("Blue mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showalert("Light mode has been enabled","success")
    }
  }
  const greenToggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#053d39";
      showalert("Green mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showalert("Light mode has been enabled","success")
    }
  }
  const redToggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#840e0e";
      showalert("Red mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showalert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Navbar title="Textutils" mode={mode} ToggleMode={ToggleMode} redToggleMode={redToggleMode} greenToggleMode={greenToggleMode}/>
    <Alert Alert={alert}/>
    <TextForm heading="Enter Your Text" mode={mode} showalert={showalert}/>
    {/* <About mode={mode}/> */}
    </>
  );
}
export default App;
