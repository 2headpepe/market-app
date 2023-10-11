import React from "react";
import Card from "./Card/Card";
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
  console.log(posts);
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((e) => (
          <div style={{ marginBottom: "45px" }}>
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
