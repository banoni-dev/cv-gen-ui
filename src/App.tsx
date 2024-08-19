import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:3000/generate", {
        jobDescription: value,
      });
      const { pdfPath } = response.data;

      if (pdfPath) {
        console.log("PDF generated successfully", pdfPath);
        const downloadUrl = `http://localhost:3000/download-pdf/${pdfPath}`;
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = pdfPath;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        console.error("Failed to generate PDF");
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <>
      <div>
        <textarea
          cols={80}
          rows={30}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        <button onClick={handleClick}>Submit</button>
      </div>
    </>
  );
}

export default App;
