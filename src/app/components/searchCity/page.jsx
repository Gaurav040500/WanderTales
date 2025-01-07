"use client";

import React from "react";

const SearchCity = () => {
  const handleButton = () => {
    alert("Button clicked");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "15vh", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
        <label htmlFor="city-search" style={{ marginRight: "10px", color: "#555" }}>
          <i className="fas fa-search"></i>
        </label>
        <input
          id="city-search"
          type="text"
          placeholder="Search your city.."
          style={{
            width: "250px",
            height: "9vh",
            borderRadius: "5px",
            padding: "0 10px",
            fontWeight: "bold",
            border: "1px solid #ccc",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
      <button
        onClick={handleButton}
        style={{
          width: "250px",
          height: "9vh",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          marginLeft: "25px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <i className="fas fa-plus" style={{ marginRight: "10px" }}></i>
        Add the unexplored gem of your city
      </button>
    </div>
  );
};

export default SearchCity;
