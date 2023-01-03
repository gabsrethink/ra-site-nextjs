import React from "react";
import styles from "./footer.module.css";
import { GitHub, LinkedIn, Instagram, YouTube } from "@mui/icons-material";
import Link from "next/link";

export default function Footer({ props: data }: any) {
  return (
    <>
      {data.map((val: any, i: any) => {
        return (
          <div className={styles.footer_container} key={i}>
            <div>
              <img src={val.footerLogo.url} alt={val.logo.name} />
            </div>
            <div className={styles.footer_icons}>
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://github.com/gabsrethink/ra-site-nextjs"}
              >
                <GitHub />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={
                  "https://www.linkedin.com/in/gabriel-%C3%A2ngelo-de-melo-6701a6168/"
                }
              >
                <LinkedIn />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://www.youtube.com/@rethinktecnologia8650"}
              >
                <YouTube />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://www.instagram.com/rethink.digital"}
              >
                <Instagram />
              </a>
            </div>
            <div className={styles.footer_info}>
              <p>{val.footerInfo}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
