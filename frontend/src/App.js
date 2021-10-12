import React, { useState } from 'react'
import './App.css';
import Routes from './routes/Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/UserAuth/Login'

function App() {

  const [toggleOverlay, setOverlayToggler] = useState(false);
  

  const handleToggler = () =>setOverlayToggler(!toggleOverlay)
  
   

  return (
    <div className="App">
      <Login toggleOverlay = {toggleOverlay} handleToggler = {handleToggler} />
      <Routes handleToggler={handleToggler} />
    </div>
  );
}

export default App;
