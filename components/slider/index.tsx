import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import styles from "./slider.module.css";
import Button from "../button";

export default function Slider({ props: data }: any) {
  return (
    <>
      <div className={styles.slider_container}>
        <div>
          {data.map((val: any, i: any) => {
            return val.galery.map((post: any, i: any) => {
              return (
                <div className={styles.slider_text}>
                  <h1>{post.title}</h1>
                  <p>{post.description}</p>
                  <Button></Button>
                </div>
              );
            });
          })}
        </div>
        <div className={styles.carousel_container}>
          <Carousel variant="dark" fade>
            {data.map((val: any, i: any) => {
              return val.galery.map((post: any, i: any) => {
                return post.images.map((img: any, i: any) => {
                  return (
                    <Carousel.Item interval={3000}>
                      <img
                        className="d-block w-100"
                        src={img.url}
                        alt={img.name}
                      />
                      <div className={styles.caption}>
                        <Carousel.Caption>
                          {/* <h3>{img.name}</h3>
                      <p>Sample Text for Image One</p> */}
                        </Carousel.Caption>
                      </div>
                    </Carousel.Item>
                  );
                });
              });
            })}
          </Carousel>
        </div>
      </div>
      <div className={styles.skew_c} />
    </>
  );
}
