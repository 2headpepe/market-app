import React from "react";
import Card from "../Cards/Cards";
import styles from "./PostList.module.css";

interface PostListProps {
  posts: {
    id: number;
    userId: number;
    title: string;
    city: string;
    postDate: string;
    text: string;
    images: string[];
    price: number;
  }[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className={styles.listWrapper}>
      {posts.length > 0 ? (
        posts.map((e) => (
          <div className={styles.postWrapper}>
            <Card {...e}></Card>
          </div>
        ))
      ) : (
        <div>Нет постов</div>
      )}
    </div>
  );
};

export default PostList;
