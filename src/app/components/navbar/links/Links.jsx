import React from "react";
import Link from "next/link";
import styles from "./links.module.css";

const Links = () => {
  const links = [
    { title: "About", path: "/about" },
    { title: "Share Your Travel Experience", path: "/Experience" },
    { title: "Country", path: "/country" },
    // { title: "SignIn", path: "/signin" },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link href={link.path} key={link.title} className={styles.link}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;



