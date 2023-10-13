import React from "react";
import Card from "../Card/Card";
import styles from "./PostList.module.css";

interface PostListProps {
  posts: {
    id: number;
    title: string;
    location: string;
    date: string;
    description: string;
    imageUrl: string;
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
