
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState('');
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input type="text" id="name" value={input} onChange={e => setInput(e.target.value)} />
        {!!input && (
          <p>{`Hello ${input}!`}</p>
        )}
    </div>
  )
}

export default App
