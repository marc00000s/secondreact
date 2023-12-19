import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="container">
      <div className="card text-center my-5">
        <div className="body">
          <h1>Number App</h1>
          <div className="number">
            <h2 className="number">{count}</h2>
            <button className="btn btn-first mx-3" onClick={()=> setCount(count + 1)}>Increase</button>
            <button className="btn btn-second mx-3"onClick={()=> setCount(count - 1)} disabled={count===0}>Decrease</button>
            <button className="btn btn-third mx-3"onClick={()=> setCount(0)} disabled={count===0}>Reset</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;