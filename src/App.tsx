import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const handleClick = async () => {};

  return (
    <div className="App">
      <textarea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setText(e.target.value)
        }
        className="App-textarea"
        placeholder="Type something here..."
      ></textarea>
      <button onClick={handleClick} className="App-button">
        Submit
      </button>
    </div>
  );
}

export default App;
