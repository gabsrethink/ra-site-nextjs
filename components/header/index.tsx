import React from "react";
import styles from "./header.module.css";

export default function Nav({ props: data }: any) {
  console.log(data);
  return (
    <>
      {data.map((val: any, i: any) => {
        return (
          <div className={styles.header_container} key={i}>
            <div>
              <img src={val.logo.url} alt={val.logo.name} />
            </div>
            <div className={styles.header_buttons}>
              {val.links.map((link: any, i: any) => {
                return (
                  <a key={i} href={`#${link.name}`}>
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
