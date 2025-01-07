import React from "react";
import Link from "next/link";
import Links from "./links/Links";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "10px",
          paddingLeft: "2rem",
          marginTop: "10px",
        }}
      >
        <div className={styles.logo}>
          <Link href="/">
            <img src="logo.png" className="styles.logo img" />
          </Link>
        </div>
        <div>
          <h2 style={{ color: "black", fontVariant: "all-small-caps" }}>
            WanderTales
          </h2>
        </div>
      </div>

      <div className={styles.links}>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
