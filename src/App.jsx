import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './app.scss';

function App() {
    const [count, setCount] = useState(0);
    
  return (
    <div className="App">
      <header className="App-header">
      <div className="app">
        Lê Văn Tươi
        </div>
        <div>
            <p>You cliked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={() => setCount(count - 1)}>ClickDown</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
