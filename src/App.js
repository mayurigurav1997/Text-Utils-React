
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import React, { useState } from 'react'
import Alert from './components/Alert.js';
import About from './components/About.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //weather dark mode is enabled or not
  //alert is a state object
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - DarkMode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - LightMode";

    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text Utils 2" aboutText="About Us" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />



        <div className="container my-5">

          <Routes>
            
            <Route exact path="/about" element={<About />} />
          </Routes>

          <Routes>
            
            <Route exact path="/"  element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />} />
          </Routes>



        </div>
      </Router>
    </>
  );
}

export default App;
