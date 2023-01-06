import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import styles from "./gallery.module.css";
import Button from "../button";

export default function Gallery({ props: data }: any) {
  return (
    <>
      {data.map((val: any, i: any) => {
        return (
          <div className={styles.carousel_container}>
            <Carousel variant="dark" fade>
              {val.promGallery.map((post: any, i: any) => {
                return (
                  <Carousel.Item interval={3000} key={i}>
                    <img src={post.url} alt={post.name} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        );
      })}
    </>
  );
}
