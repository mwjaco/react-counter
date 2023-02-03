import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000)
  }, []);
  return (
    <div className="App">
      <h1>The current count is:</h1>
      <h2>{count}</h2>
    </div>
  );
}

export default App;
