
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import React, { useState } from 'react'
// import About from './components/About.js'


function App() {
  const[mode, setMode] = useState('light'); //weather dark mode is enabled or not
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
      <Navbar title="Text Utils 2" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
     <div className="container my-5">
       <TextForm heading="Enter the text to Analyze below" mode={mode}/>
       {/* <About /> */}
     </div>
    </>
  );
}

export default App;
