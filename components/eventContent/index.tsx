import React from "react";
import styles from "./eventContent.module.css";

export default function EventContent({ props: data }: any) {
  return (
    <>
      {data.map((val: any, i: any) => {
        let lastWords = val.eventParagraph.slice(-20);
        return (
          <div className={styles.text_container} key={i}>
            <h1>{val.eventTitle}</h1>
            <p>{val.eventDescription}</p>
            <p>
              {val.eventParagraph.replace(`${lastWords}`, "")}
              <span>{lastWords}</span>
            </p>
          </div>
        );
      })}
    </>
  );
}
