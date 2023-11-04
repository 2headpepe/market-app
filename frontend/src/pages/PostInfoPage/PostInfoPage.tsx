import { Button } from "antd";
import React from "react";
import ShowPhoto from "../../components/ShowPhoto/ShowPhoto";
import Card from "../../components/Cards";
import styles from "./PostInfoPage.module.css";
import { Link, useLocation } from "react-router-dom";
import CategoryBadge from "../../components/CategoryBadge/CategoryBadge";
import Header from "../../components/Header/Header";
// interface IPostRequest {
//   images: string[];
//   id: number;
//   userId: number;
//   title: string;
//   text: string;
//   categoryId: string;
//   price: number;
//   city: string;
//   postDate: string;
//   sold: boolean;
// }
// const category = [
//   "Home",
//   "Services",
//   "Electronics",
//   "Clothes",
//   "Health and beauty",
// ];

const PostInfoPage = () => {
  const location = useLocation();
  const { images, city, title, postDate, text, price } = location.state;

  return (
    <div className={styles.postInfoPageWrapper}>
      <Header
        showTitle
        showSearch
        showMoney
        showInfo
      ></Header>

      <div className={styles.mainWrapper}>
        <div>
          <ShowPhoto
            height={"70vh"}
            width={"70vh"}
            images={images}
          ></ShowPhoto>
        </div>

        <div className={styles.infoWrapper}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <CategoryBadge
              width={"200px"}
              height={"30px"}
              id={"Electronics"}
            >
              Clothes
            </CategoryBadge>
            <Link to="/1/profile">
              <div className={styles.sellerInfo}>
                <div>
                  <div style={{ color: "white" }}>Seller</div>
                </div>
              </div>
            </Link>
            <Link to="/1/profile">
              <img
                className={styles.photo}
                src="https://38s.musify.club/img/68/22744618/58256306.jpg"
                alt="icon"
                height={30}
              />
            </Link>
          </div>

          {/* <hr /> */}
          <div
            className="Card--info-wrapper "
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              maxWidth: "30vh",
            }}
          >
            <div className="Card--location--wrapper">
              <img
                src="./images/location.svg"
                alt=""
                className="Card--location--icon"
              />
              <p style={{ fontSize: "16px" }}>{city}</p>
              <p style={{ fontSize: "12px" }}>{postDate}</p>
            </div>

            <h3
              className="Card--name"
              style={{ fontSize: "32px" }}
            >
              {title}
            </h3>
            <p style={{ fontSize: "14px" }}>{text}</p>
            <h4 className="Card--price">{price + "$"}</h4>
          </div>

          {/* <hr /> */}

          <Button
            type="primary"
            style={{ marginTop: "20px" }}
          >
            {" "}
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostInfoPage;
