import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setlen] = useState(10);

  function handleChange(event) {
    setlen(event.target.value);
  }

  function generate() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let genpwd = "";
    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * chars.length);
      genpwd += chars[random];
    }
    setPassword(genpwd);
  }

  return (
    <div className="pwd-gen">
      <h1>Password Generator</h1>
      <div className="controls">
        <label>
          Password Length :
          <input type="number" value={length} onChange={handleChange} />
        </label>
        <button onClick={generate}>Generate Password</button>
      </div>
      <div className="output">
        <p>{password}</p>
      </div>
    </div>
  );
}
export default App;
