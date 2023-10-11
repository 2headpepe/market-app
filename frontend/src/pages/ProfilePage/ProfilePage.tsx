import React from "react";
import styles from "./ProfilePage.module.css";
import data from "../../data.js";
import PostList from "../../components/PostList";
import { MoreOutlined } from "@ant-design/icons";
import Star from "../../components/Star/Star";
import Card from "../../components/Card/Card";
import { Button } from "antd";
import Header from "../../components/Header/Header";
const ProfilePage = () => {
  return (
    <div className={styles.profilePageWrapper}>
      <Header></Header>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div className={styles.profileWrapper}>
          {/* <h1>Public profile</h1> */}

          <img
            src="https://damion.club/uploads/posts/2022-09/1663879174_3-damion-club-p-dora-pevitsa-oboi-instagram-3.jpg"
            alt="photo"
            className={styles.profilePhoto}
          />

          <div className={styles.infoWrapper}>
            <div className={styles.firstName}>Your name</div>
            <div className={styles.date}>Since 21.12.2003</div>

            <Star rating={4}></Star>
            <hr className={styles.hr} />
            <div className={styles.email}>Status</div>
            <div className={styles.text}>User</div>
            <div className={styles.email}>Email</div>
            <div className={styles.text}>myemail@gmail.com</div>
            <div className={styles.birthDate}>Birthdate</div>
            <div className={styles.text}>21.12.2003</div>
            <div className={styles.password}>Password</div>
            <div className={styles.text}>password</div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.buttonWrapper}>
            <Button type="primary">Add post</Button>
            <Button>Edit profile</Button>
          </div>
        </div>
        <div>
          <div className={styles.postsWrapper}>
            <div className={styles.postTextWrapper}>
              <h1>Your last post</h1>
              <div className={styles.openPosts}>Check all</div>
            </div>
            <hr className={styles.hr} />
            <Card {...data[0]}></Card>
          </div>
          <div className={styles.postsWrapper}>
            <div className={styles.postTextWrapper}>
              <h1>Your last buy</h1>
              <div className={styles.openPosts}>Check all</div>
            </div>
            <hr className={styles.hr} />
            <Card {...data[0]}></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
