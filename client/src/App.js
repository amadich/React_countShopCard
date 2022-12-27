import React, { useState } from "react";
import './App.css';
import Header from './components/header';
import Section from './components/section';
function App() {
  const [num,setNum] = useState(0);
  
  return (
    
    <div className="App">
        
                <Header num={num} />
        
                <Section setNum={setNum} num={num} />
        
    </div>

  );
}

export default App;
