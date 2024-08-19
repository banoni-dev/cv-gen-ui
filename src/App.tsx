import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const handleClick = async () => {
    try {
      fetch("http://localhost:3000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jobDescription: value }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <textarea
        cols={80}
        rows={30}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <button onClick={handleClick}>Submit</button>
    </>
  );
}

export default App;
