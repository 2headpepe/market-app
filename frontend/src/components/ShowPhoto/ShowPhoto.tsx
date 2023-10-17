import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import styles from "./ShowPhoto.module.css";

interface ShowPhotoProps {
  images: string[];
  height?: string;
  width?: string;
}

const ShowPhoto = ({ height, width, images }: ShowPhotoProps) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  function decrement() {
    setCurrentImage((state) => {
      if (state) {
        return state - 1;
      } else {
        return images.length - 1;
      }
    });
  }

  function increment() {
    setCurrentImage((state) => (state + 1) % images.length);
  }

  return (
    <div className={styles.pageWrapper}>
      <LeftOutlined onClick={decrement}></LeftOutlined>
      <div
        className={styles.showPhotoWrapper}
        style={{ height: height, width: width }}
      >
        <div className={styles.imgWrapper}>
          <img
            src={images[currentImage]}
            alt=""
            className={styles.img}
          />
        </div>
        {/* <Button
          className={`${styles.button} ${styles.left}`}
          onClick={decrement}
        >
          <LeftOutlined className={styles.icon} />
        </Button>
        <Button
          className={`${styles.button} ${styles.right}`}
          onClick={increment}
        >
          <RightOutlined className={styles.icon} />
        </Button> */}
      </div>
      <div style={{ height: "100%" }}>
        <RightOutlined onClick={increment} />
      </div>
    </div>
  );
};

export default ShowPhoto;
