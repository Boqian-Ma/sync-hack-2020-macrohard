import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Content, Login } from './components'

function App() {
  const [login, setLogin] = useState(false);
  function toggleOverlay() {
    setLogin(!login);
  }
  return (
    <div className="App">
      {login && <Content></Content>}
      { !login &&
      <div className="overlay">
          <Login sign={toggleOverlay} ></Login>
      </div> }
    </div>
  );
}

export default App;
