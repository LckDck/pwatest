import React, { useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("");
  const getQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const myJson = await res.json();
    setQuote(JSON.stringify(myJson.content));
  }

  return (
    <div className="container">
      <img className="duck" src={require('./1.png')} />
      <a className="btn" onClick={getQuote} >СПРОСИТЬ</a>
      <label className="quote">{quote}</label>
    </div>
  );
}

export default App;
