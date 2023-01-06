import React from "react";
import styles from "./titleContent.module.css";
import { motion as m } from "framer-motion";

export default function TitleContent({ props: data }: any) {
  return (
    <>
      {data.map((val: any, i: any) => {
        let lastWords = val.content.slice(-35);
        return (
          <div className={styles.text_container} key={i}>
            <m.h1
              initial={{ y: "-150%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              {val.title}
            </m.h1>
            <m.p
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              {val.content.replace(`${lastWords}`, "")}
              <span>{lastWords}</span>
            </m.p>
          </div>
        );
      })}
    </>
  );
}
