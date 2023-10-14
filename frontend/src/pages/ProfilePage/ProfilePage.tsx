import React from "react";
import styles from "./ProfilePage.module.css";
import data from "../../data.js";
import PostList from "../../components/PostList/PostList";
import { DownOutlined, MoreOutlined } from "@ant-design/icons";
import Star from "../../components/Star/Star";
import Card from "../../components/Cards";
import { Button } from "antd";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modals/Modal/Modal";
import { time } from "console";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";

interface IModal {
  posts: boolean;
  buys: boolean;
}
const ProfilePage = () => {
  const [modal, setModal] = React.useState<IModal>({
    posts: false,
    buys: false,
  });

  function onPostsClick() {
    setModal((state) => ({ ...state, posts: !state.posts }));
  }
  function onBuysClick() {
    setModal((state) => ({ ...state, buys: !state.buys }));
  }
  return (
    //style={{}}
    <div className={styles.profilePageWrapper}>
      <Header></Header>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div className={styles.profileWrapper}>
          <ProfileInfo />
        </div>

        <div>
          <div
            className={styles.postsWrapper}
            onClick={onPostsClick}
          >
            <Card
              {...data[0]}
              header={{ title: "Your last post", showMore: true }}
            ></Card>
          </div>

          <div
            className={styles.postsWrapper}
            onClick={onBuysClick}
          >
            <Card
              {...data[0]}
              header={{ title: "Your last buy", showMore: true }}
            ></Card>
          </div>
        </div>
      </div>

      <Modal
        modal={modal.posts}
        setModal={onPostsClick}
      >
        <h1>Posts</h1>
        <hr />
        <PostList posts={data}></PostList>
      </Modal>
      <Modal
        modal={modal.buys}
        setModal={onBuysClick}
      >
        <h1>Buys</h1>
        <hr />
        <PostList posts={data}></PostList>
      </Modal>
    </div>
  );
};

export default ProfilePage;
