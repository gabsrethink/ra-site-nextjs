import { motion as m } from "framer-motion";
import React from "react";
import styles from "./projectDescription.module.css";

export default function ProjectDescription({ props: data }: any) {
  return (
    <m.div
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {data.map((val: any, i: any) => {
        let lastWords = val.projectDescription.slice(-72);
        return (
          <div className={styles.text_container} key={i}>
            <img src={val.projectLogo.url} alt="" />

            <div className={styles.text_style}>
              <m.h1
                initial={{ x: "-50%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.95, ease: "easeOut" }}
              >
                {val.projectTitle}
              </m.h1>
              <m.p
                initial={{ x: "50%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.95, ease: "easeOut" }}
              >
                {val.projectDescription.replace(`${lastWords}`, "")}
                <span>{lastWords}</span>
              </m.p>
            </div>
          </div>
        );
      })}
      <div className={styles.skew_c} />
    </m.div>
  );
}
