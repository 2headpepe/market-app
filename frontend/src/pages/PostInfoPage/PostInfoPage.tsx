import { Button } from "antd";
import React from "react";
import ShowPhoto from "../../components/ShowPhoto/ShowPhoto";
import Card from "../../components/Cards";
import styles from "./PostInfoPage.module.css";
import { Link } from "react-router-dom";
import CategoryBadge from "../../components/CategoryBadge/CategoryBadge";
import Header from "../../components/Header/Header";
interface IPostRequest {
  images: string[];
  id: number;
  userId: number;
  title: string;
  text: string;
  categoryId: string;
  price: number;
  city: string;
  postDate: string;
  sold: boolean;
}
const category = [
  "Home",
  "Services",
  "Electronics",
  "Clothes",
  "Health and beauty",
];

const PostInfoPage = (props: IPostRequest) => {
  const { images, city, title, postDate, text, price } = props;
  return (
    <div className={styles.postInfoPageWrapper}>
      <Header></Header>

      <div className={styles.mainWrapper}>
        <div>
          <ShowPhoto
            height={"500px"}
            width={"500px"}
            images={[
              "https://content.api.news/v3/images/bin/19baaccb3d706775bb9c3bbe2f946bb3",
              "https://damion.club/uploads/posts/2022-09/1663879174_3-damion-club-p-dora-pevitsa-oboi-instagram-3.jpg",
            ]}
          ></ShowPhoto>
        </div>

        <div className={styles.infoWrapper}>
          {/* <Link to={"/"}>
          <div className="secondary">Get back</div>
        </Link> */}

          <CategoryBadge
            //   width={"200px"}
            height={"40px"}
            id={"Electronics"}
          >
            Clothes
          </CategoryBadge>
          {/* {category.map((e) => (
            <CategoryBadge
              id={e}
              height={"40px"}
            >
              (.)(.)  
            </CategoryBadge>
          ))} */}
          {/* <hr /> */}
          <div
            className="Card--info-wrapper "
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div className="Card--location--wrapper">
              <img
                src="./images/location.svg"
                alt=""
                className="Card--location--icon"
              />
              <p className="Card--location--text">{city}</p>
              <p className="Card--dates">{postDate}</p>
            </div>

            <h3 className="Card--name">{title}</h3>
            <p className="Card--text">{text}</p>
            <h4 className="Card--price">{price + "$"}</h4>
          </div>

          {/* <hr /> */}
          <Link to="/profile">
            <div className={styles.sellerInfo}>
              <div>
                <div className="primary">Your name</div>
                <div className="secondary">Status</div>
              </div>
              <img
                className={styles.photo}
                src="https://38s.musify.club/img/68/22744618/58256306.jpg"
                alt="icon"
                height={48}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostInfoPage;
