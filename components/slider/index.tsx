import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import styles from "./slider.module.css";
import Button from "../button";

export default function Slider({ props: data }: any) {
  return (
    <>
      {data.map((val: any, i: any) => {
        return (
          <>
            {val.galery.map((post: any, i: any) => {
              return (
                <>
                  <div
                    key={i}
                    className={
                      post.isDarkTheme === true
                        ? styles.text_and_image_dark
                        : styles.text_and_image
                    }
                  >
                    <div className={styles.slider_text}>
                      <h1>{post.title}</h1>
                      <p>{post.description}</p>
                      <Button
                        type={post.isDarkTheme === true ? "green" : "black"}
                        url={post.url}
                      />
                    </div>
                    <div className={styles.carousel_container}>
                      <Carousel
                        variant={post.isDarkTheme === true ? "light" : "dark"}
                        fade
                      >
                        {post.images.map((img: any, i: any) => {
                          return (
                            <Carousel.Item interval={3000} key={i}>
                              <img src={img.url} alt={img.name} />
                            </Carousel.Item>
                          );
                        })}
                      </Carousel>
                    </div>
                  </div>
                  <div
                    className={
                      post.isDarkTheme === true ? styles.skew_cc : styles.skew_c
                    }
                  />
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
}
