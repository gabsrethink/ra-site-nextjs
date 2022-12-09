import React from "react";
import styles from "./footer.module.css";
import { GitHub, LinkedIn, Instagram, YouTube } from "@mui/icons-material";

export default function Footer({ props: data }: any) {
  console.log(data);
  return (
    <>
      {data.map((val: any, i: any) => {
        return (
          <div className={styles.footer_container} key={i}>
            <div>
              <img src={val.footerLogo.url} alt={val.logo.name} />
            </div>
            <div className={styles.footer_icons}>
              <GitHub />
              <LinkedIn />
              <Instagram />
              <YouTube />
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
