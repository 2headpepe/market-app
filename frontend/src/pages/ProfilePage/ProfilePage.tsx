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
      <Header></Header>
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
            <Card
              {...data[0]}
              header={{ title: "Your last post", showMore: onPostsClick }}
            ></Card>
          </div>

          <div className={styles.postsWrapper}>
            <Card
              {...data[0]}
              header={{ title: "Your last buy", showMore: onBuysClick }}
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

      <CreatePost
        modal={createPostModal}
        setModal={setCreatePostModal}
        createPost={console.log}
      ></CreatePost>
    </div>
  );
};

export default ProfilePage;
