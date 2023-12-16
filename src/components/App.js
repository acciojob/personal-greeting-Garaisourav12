
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState('');
  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="name">Enter your name:</label>
        <input type="text" id="name" value={input} onChange={e => setInput(e.target.value)} />
        {!!input && (
          <span>{`Hello ${input}!`}</span>
        )}
    </div>
  )
}

export default App
