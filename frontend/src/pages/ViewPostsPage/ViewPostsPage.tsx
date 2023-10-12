import React from "react";
import Header from "../../components/Header/Header";
import PostList from "../../components/PostList/PostList";
import data from "../../data.js";
import styles from "./ViewPostsPage.module.css";

const ViewPostsPage = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.postListWrapper}>
        <h1>Your posts</h1>
        <PostList posts={data}></PostList>
      </div>
    </div>
  );
};

export default ViewPostsPage;
