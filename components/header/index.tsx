import Link from "next/link";
import React, { useState } from "react";
import styles from "./header.module.css";

export default function Nav() {
  const [navActive, setNavActive] = useState(true);
  return (
    <div className={styles.header_container}>
      <div>
        <img
          src="https://res.cloudinary.com/dyszk230x/image/upload/v1670266771/0_Logo_caba77f342.png"
          alt="Rethink Logo"
        />
      </div>
      <div onClick={() => setNavActive(!navActive)} className={styles.nav_menu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        className={
          navActive === false
            ? styles.header_buttons
            : styles.header_buttons_hidden
        }
        onClick={() => setNavActive(true)}
      >
        <Link href={"/"}>Home</Link>
        <a href={"/#Sobre"}>Sobre</a>
        <Link href={"/projects"}>Projetos</Link>
        <Link href={"/events"}>Eventos</Link>
        <Link href={"/team"}>Equipe</Link>
      </div>
    </div>
  );
}
