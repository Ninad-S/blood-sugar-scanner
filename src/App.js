import React, { useState } from "react";
import "./App.css";

function App() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);

  const handleScan = () => {
    setScanning(true);
    setResult(null);

    // Simulate a scan delay and random glucose result
    setTimeout(() => {
      const glucose = (80 + Math.random() * 60).toFixed(1);
      setResult(glucose);
      setScanning(false);
    }, 3000);
  };

  return (
    <div className="App">
      <h1>🩸Diabetes Scanner</h1>
      <p>Please Press your finger to scan your blood sugar level.</p>

      <button className="scan-btn" onClick={handleScan} disabled={scanning}>
        {scanning ? "Scanning..." : "Press Finger"}
      </button>

      {scanning && <div className="scanner"></div>}

      {result && (
        <div className="result">
          <h2>Blood Sugar Level: {result} mg/dL</h2>
          <p>{result < 90 ? "Low" : result > 130 ? "High" : "Normal"}</p>
        </div>
      )}
    </div>
  );
}

export default App;
