import React from "react";
import Card from "../Cards";
import styles from "./PostList.module.css";

export interface PostListProps {
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
  console.log(posts);
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
