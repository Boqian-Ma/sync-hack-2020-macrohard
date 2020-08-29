import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Content, Login, SearchCompanies } from './components'

function App() {
  const [login, setLogin] = useState(false);
  function toggleOverlay() {
    setLogin(!login);
  }

  fetch("http://127.0.0.1:5000/home").then(response => 
      response.json().then(data => {
        console.log(data);
      })
  )

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
