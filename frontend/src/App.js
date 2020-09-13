import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import History from './components/History';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <div>
            <h2 style={{textAlign:'center'}}>Calculator</h2>
            <Calculator/>
          </div>
          <div>
            <h2 style={{textAlign:'center'}}>History</h2>
            <History/>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;