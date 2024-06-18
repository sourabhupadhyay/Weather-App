import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
        {/* Provide a descriptive alt text or leave it empty if the image is decorative */}
        {/* <img src="path-to-your-image.jpg" alt="Descriptive text" /> */}
        {/* If the image is decorative: */}
        {/* <img src="path-to-your-image.jpg" alt="" /> */}
      </div>
      <div className="footer-info">
        Developed by{" "}
        <a href="https://your-valid-url.com" target="_blank" rel="noreferrer">
          Sourabh Upadhyay
        </a>
        {/* If no valid URL, use a button styled as a link */}
        {/* <button 
            onClick={() => window.open("https://your-valid-url.com", "_blank", "noopener,noreferrer")}
            style={{ background: "none", border: "none", padding: 0, color: "blue", textDecoration: "underline", cursor: "pointer" }}
          >
            Sourabh Upadhyay
          </button>
        */}
      </div>
    </React.Fragment>
  );
}

export default App;
