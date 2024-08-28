import Image from "next/image";
import SearchCity from './components/searchCity/page'; // Ensure this path is correct

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <img src="landing.jpeg" alt="Landing Image" style={{ width: "100%", height: "50vh" }} />
      <div style={{ position: "absolute", top: "10%", left: "10%" }}>
        <h1 style={{ fontWeight: "bold", color: "black", fontSize: "50px" }}>
          "Where Your Journey<br /> Inspires Others"
        </h1>
        <br />
        <p
          style={{
            fontWeight: "500",
            color: "white",
            width: "50%",
            fontSize: "20px",
          }}
        >
          "Share your travel stories, tips, and experiences to guide and inspire
          a global community of explorers."
        </p>
      </div>
      <div style={{ marginTop: "5vh", textAlign: "center" }}>
        <h3 style={{ color: "black" }}>
          "Building India's No.1 Travel Community"
        </h3>
        <br />
        <p style={{ color: "gray" }}>
          "Bringing Together Indian Travelers to Share Stories, Discover Hidden
          Gems, and Inspire Every Journey"
        </p>
      </div>
      <SearchCity /> {/* Use the component with the correct capitalization */}
    </div>
  );
}
