import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1> Counter App</h1>
      <h2>{count}</h2>
      <button className="incrmentBtn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button
        className="decrementBtn"
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
      >
        Decrement
      </button>
      <button
        className="resetBtn"
        onClick={() => setCount(0)}
        disabled={count === 0}
      >
        Reset
      </button>
    </div>
  );
}
