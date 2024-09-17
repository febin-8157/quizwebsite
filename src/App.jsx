import './App.css'
import React from 'react';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Quiz App</h1>
        <Quiz />
      </header>
    </div>
  );
}

export default App;
