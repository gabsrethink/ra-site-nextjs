import React from "react";
import styles from "./titleContent.module.css";

export default function TitleContent({ props: data }: any) {
  return (
    <>
      {data.map((val: any, i: any) => {
        let lastWords = val.content.slice(-35);
        return (
          <div className={styles.text_container} key={i}>
            <h1>{val.title}</h1>
            <p>
              {val.content.replace(`${lastWords}`, "")}
              <span>{lastWords}</span>
            </p>
          </div>
        );
      })}
    </>
  );
}
