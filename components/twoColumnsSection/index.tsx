import React from "react";
import styles from "./twoColumnsSection.module.css";

export default function TwoColumnsSection({ props: data }: any) {
  return (
    <>
      {data.map((val: any, i: any) => {
        return (
          <div key={i} className={styles.section_container}>
            <div id="Sobre" className={styles.post_header}>
              <h1>{val.trailTitle}</h1>
              <p>{val.trailDescription}</p>
            </div>
            {val.text_and_image.map((post: any, i: any) => {
              return (
                <div key={i}>
                  <div
                    className={
                      post.is_text_on_left === true
                        ? styles.post_container
                        : styles.post_container_left_text
                    }
                  >
                    <div className={styles.post_text}>
                      <h1>{post.title}</h1>
                      <p>{post.description}</p>
                    </div>
                    <div className={styles.circle}>
                      <img src={post.image.url} alt={post.image.name} />
                    </div>
                  </div>
                  <div
                    className={
                      post.is_text_on_left === true
                        ? styles.skew_cc
                        : styles.skew_c
                    }
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
