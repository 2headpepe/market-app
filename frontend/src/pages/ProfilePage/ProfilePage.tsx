import React from "react";
import styles from "./ProfilePage.module.css";
import data from "../../data.js";
import PostList from "../../components/PostList/PostList";
import Card from "../../components/Cards";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modals/Modal/Modal";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import PhotoModal from "../../components/Modals/PhotoModal/PhotoModal";
import CreatePost from "../../components/Modals/CreatePost/CreatePost";
import PostsModal from "../../components/Modals/PostsModal/PostsModal";
import ExtendedCard from "../../components/Cards";

interface IModal {
  posts: boolean;
  buys: boolean;
}
const ProfilePage = () => {
  const [modal, setModal] = React.useState<IModal>({
    posts: false,
    buys: false,
  });

  const [createPostModal, setCreatePostModal] = React.useState(false);

  function onPostsClick() {
    setModal((state) => ({ ...state, posts: !state.posts }));
  }
  function onBuysClick() {
    setModal((state) => ({ ...state, buys: !state.buys }));
  }
  return (
    //style={{}}
    <div className={styles.profilePageWrapper}>
      <Header
        showTitle
        showSearch
        showMoney
        showInfo
      ></Header>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div className={styles.profileWrapper}>
          <ProfileInfo
            createPost={function (
              event: React.MouseEvent<Element, MouseEvent>
            ): void {
              setCreatePostModal((createPostModal) => !createPostModal);
            }}
          />
        </div>

        <div>
          <div className={styles.postsWrapper}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <h2>Your products</h2>
              <div
                className={`secondary`}
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={onPostsClick}
              >
                Show more
              </div>
            </div>
            <hr />
            <Card {...data[0]}></Card>
          </div>

          <div className={styles.postsWrapper}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <h2>Your buys</h2>
              <div
                className={`secondary`}
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={onBuysClick}
              >
                Show more
              </div>
            </div>
            <hr />
            <Card {...data[0]}></Card>
          </div>
        </div>
      </div>

      <PostsModal
        posts={data}
        modal={modal.posts}
        setModal={onPostsClick}
        header="Your products"
      ></PostsModal>
      <PostsModal
        posts={data}
        modal={modal.buys}
        setModal={onBuysClick}
        header="Your buys"
      ></PostsModal>

      {/* <Modal
        modal={modal.posts}
        setModal={onPostsClick}
      >
        <h1>Posts</h1>
        <hr />
        <PostList {...data}></PostList>
      </Modal> */}
      {/* <Modal
        modal={modal.buys}
        setModal={onBuysClick}
      >
        <h1>Buys</h1>
        <hr />
        <PostList {...data}></PostList>
      </Modal> */}

      <CreatePost
        modal={createPostModal}
        setModal={setCreatePostModal}
        createPost={console.log}
      ></CreatePost>
    </div>
  );
};

export default ProfilePage;
