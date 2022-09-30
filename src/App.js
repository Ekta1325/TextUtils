
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
function App() {
  const [ mode, setMode ]=useState('light');
  const [alert, setAlert ]=useState(null);

  const showAlert=(meassage,type)=>{
    setAlert({
      msg:meassage,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }
  const removebc=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
   }
  const toggleMode=(cls)=>{
    removebc();
    document.body.classList.add('bg-'+cls)
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")

    }
  }
  return (
  <>
  <Router>
     <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     
      <Routes>
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Textform showAlert={showAlert} heading="Enter the text" mode={mode}/>
          </Route> */}
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} toggleMode={toggleMode}/>}>
            </Route>
      </Routes>
     </div>
     </Router>
     
  </>
    
  );
}

export default App;
