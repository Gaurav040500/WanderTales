// Ensure this file is treated as a Client Component
"use client";

import React from "react";

const Page = () => {

    const handleButton = () => {
        alert("Button clicked");
    };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "15vh", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
        <i className="fas fa-search" style={{ marginRight: "10px", color: "#555" }}></i>
        <input
          type="text"
          placeholder="Search your city.."
          style={{
              width: "250px",
              height: "9vh",
              borderRadius: "5px",
              padding: "0 10px", // Adjust padding to fit icon
              fontWeight: "bold", // Make placeholder text bold
              border: "1px solid #ccc",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)" // Shadow for input
            }}
        />
      </div>
      <button
        onClick={handleButton}
        style={{
          width: "250px",
          height: "9vh",
          borderRadius: "5px",
          backgroundColor: "#007bff", // Blue background
          color: "white",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          marginLeft: "25px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)" // Shadow for button
        }}
      >
        <i className="fas fa-plus" style={{ marginRight: "10px" }}></i>
        Add the unexplored gem of your city
      </button>
    </div>
  );
};

export default Page;
