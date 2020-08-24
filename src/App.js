import React, { useState, useEffect}  from 'react';

//components
import Header from "./components/Header";
import Task from "./components/Task";
import Input from "./components/Input"

import "./style.css"


function App() {
  return (
    <div className="App">
        <Header/>
        <div className="body-container">
          <Input/>
          <Task/>
        </div>

    </div>
  );
}

export default App;
