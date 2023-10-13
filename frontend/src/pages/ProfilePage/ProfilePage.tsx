import React from "react";
import styles from "./ProfilePage.module.css";
import data from "../../data.js";
import PostList from "../../components/PostList/PostList";
import { DownOutlined, MoreOutlined } from "@ant-design/icons";
import Star from "../../components/Star/Star";
import Card from "../../components/Card/Card";
import { Button } from "antd";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modals/Modal/Modal";

interface IModal {
  posts: boolean;
  buys: boolean;
}
const ProfilePage = () => {
  const [modal, setModal] = React.useState<IModal>({
    posts: false,
    buys: false,
  });
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
          <div
            className={styles.postsWrapper}
            onClick={() => setModal((state) => ({ ...state, posts: true }))}
          >
            <h1>Your last post</h1>
            <hr className={styles.hr} />
            <Card {...data[0]}></Card>
            <div className={styles.openPosts}>Show more</div>
            <DownOutlined style={{ color: "#828282", marginTop: "5px" }} />
          </div>
          <div
            className={styles.postsWrapper}
            onClick={() => setModal((state) => ({ ...state, buys: true }))}
          >
            <div className={styles.postTextWrapper}>
              <h1>Your last buy</h1>
            </div>
            <hr className={styles.hr} />
            <Card {...data[0]}></Card>
            <div className={styles.openPosts}>Show more</div>
            <DownOutlined style={{ color: "#828282", marginTop: "5px" }} />
          </div>
        </div>
      </div>

      <Modal
        modal={modal.posts}
        setModal={() =>
          setModal((state: IModal) => ({ ...state, posts: false }))
        }
      >
        <h1>Posts</h1>
        <PostList posts={data}></PostList>
      </Modal>
      <Modal
        modal={modal.buys}
        setModal={() =>
          setModal((state: IModal) => ({ ...state, buys: false }))
        }
      >
        <h1>Buys</h1>
        <PostList posts={data}></PostList>
      </Modal>
    </div>
  );
};

export default ProfilePage;
