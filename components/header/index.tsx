import Link from "next/link";
import React, { useState } from "react";
import styles from "./header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const gaEventTracker = useAnalyticsEventTracker("Header");

  return (
    <div className={styles.header_container}>
      <div>
        <img
          src="https://res.cloudinary.com/dyszk230x/image/upload/v1670266771/0_Logo_caba77f342.png"
          alt="Rethink Logo"
        />
      </div>

      <button
        className={styles.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <MenuIcon />
      </button>

      <div
        className={
          isNavExpanded ? styles.mobile_buttons : styles.header_buttons
        }
        onClick={() => {
          setIsNavExpanded(false);
        }}
      >
        <Link href={"/"} onClick={() => gaEventTracker("home")}>
          Home
        </Link>
        {/* <a href={"/#Sobre"}>Sobre</a> */}
        <Link href={"/projects"} onClick={() => gaEventTracker("projects")}>
          Projetos
        </Link>
        <Link href={"/events"} onClick={() => gaEventTracker("events")}>
          Eventos
        </Link>
        <Link href={"/team"} onClick={() => gaEventTracker("team")}>
          Equipe
        </Link>
      </div>
    </div>
  );
}
