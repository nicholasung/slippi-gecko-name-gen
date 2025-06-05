"use client";

import { useState } from "react";
import { stringProcessor } from "../processing/stringprocess"; // Adjust the path based on your project structure

export default function Home() {
  const [name, setName] = useState("");
  const [geckoResult, setGeckoResult] = useState(""); // State to store the geckoResult
  const processor = new stringProcessor();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setName(inputValue);
    const result = processor.toGecko(inputValue);
    setGeckoResult(result);
    console.log("Processed value:", result);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(geckoResult).then(() => {
      console.log("Copied to clipboard:", geckoResult);
    }).catch((error) => {
      console.error("Failed to copy:", error);
    });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Slippi Name Tag Gecko Code Generator</h1>
      <h3 style={{color: "red"}}>NOTE: Non english characters and symbols are untested</h3>
      <label htmlFor="name">Name (1 to 7 characters):</label>

      <input
        type="text"
        id="name"
        style={{
          color: 'var(--foreground)',
          backgroundColor: 'var(--background)',
          border: '2px solid var(--foreground)',
          borderRadius: '5px',
          padding: '5px',
          fontSize: '16px',
          width: '160px', 
        }}
        name="name"
        minLength={0}
        maxLength={7}
        value={name}
        onChange={handleInputChange}
      />
      <label htmlFor="geckoResult">Processed Gecko Result:</label>
      <textarea
        id="geckoResult"
        value={geckoResult}
        readOnly 
        style={{
          color: 'var(--foreground)',
          backgroundColor: 'var(--background)',
          border: '2px solid var(--foreground)',
          borderRadius: '5px',
          padding: '5px',
          width: '50%', 
          height: '700px', 
          resize: 'vertical', 
        }}
      />
      <button 
        onClick={handleCopyToClipboard} 
        onMouseDown={(e) => e.currentTarget.style.backgroundColor = 'var(--foreground-dark)'} // Darken on click
        onMouseUp={(e) => e.currentTarget.style.backgroundColor = 'var(--foreground)'} // Reset after click
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: 'var(--foreground)',
          color: 'var(--background)',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.2s ease', 
      }}
      >
      Copy to Clipboard
      </button>
    </div>
  );
}