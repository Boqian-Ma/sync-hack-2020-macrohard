import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Content, Login, SearchCompanies } from './components'

function App() {
  const [login, setLogin] = useState(false);
  function toggleOverlay() {
    setLogin(!login);
  }

  return (
    <div className="App">
      <Content></Content>
      { !login &&
      <div className="overlay">
          <Login sign={toggleOverlay} ></Login>
      </div> }
    </div>
  );
}

export default App;
