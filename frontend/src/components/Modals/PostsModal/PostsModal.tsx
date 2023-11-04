import React from "react";
import Modal from "../Modal/Modal";
import ModalProps from "../ModalTypes";
import PostList, { PostListProps } from "../../PostList/PostList";

interface PostsModalProps extends ModalProps {
  posts: PostListProps["posts"];
  header?: string;
}

const PostsModal = (props: PostsModalProps) => {
  return (
    <Modal
      modal={props.modal}
      setModal={props.setModal}
    >
      <div>{props.header && <h1>{props.header}</h1>}</div>
      <hr />
      <PostList posts={props.posts}></PostList>
    </Modal>
  );
};

export default PostsModal;
