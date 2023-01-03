import React from "react";
import styles from "./projectDescription.module.css";

export default function ProjectDescription({ props: data }: any) {
  return (
    <>
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
              <h1>{val.projectTitle}</h1>
              <p>
                {val.projectDescription.replace(`${lastWords}`, "")}
                <span>{lastWords}</span>
              </p>
            </div>
          </div>
        );
      })}
      <div className={styles.skew_c} />
    </>
  );
}
