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
            <div className={styles.logo}>
              <img
                className={styles.moving_image}
                src="https://res.cloudinary.com/dyszk230x/image/upload/v1671725793/Mask_group_1_1_285c763af7.png?updated_at=2022-12-22T16:16:34.620Z"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dyszk230x/image/upload/v1671725793/Mask_group_1_2_004adfc161.png?updated_at=2022-12-22T16:16:34.910Z"
                alt=""
              />
              <img
                className={styles.moving_image}
                src="https://res.cloudinary.com/dyszk230x/image/upload/v1671725793/Mask_group_1_3_d22bb174c0.png?updated_at=2022-12-22T16:16:34.830Z"
                alt=""
              />
              {/* <img src={val.projectLogo.url} alt="" /> */}
            </div>
            <div className={styles.text_style}>
              <m.h1
                initial={{ x: "-50%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.95, ease: "easeOut" }}
              >
                {val.projectTitle}
              </m.h1>
              <m.p
                initial={{ x: "50%" }}
                animate={{ x: "0%" }}
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
