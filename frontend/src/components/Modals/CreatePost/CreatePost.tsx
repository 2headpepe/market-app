import React from "react";
import styles from "./CreatePost.module.css";
import { Button, Form, Input, Select } from "antd";

const CreatePost = () => {
  return (
    <div className={styles.createPostWrapper}>
      <div className={styles.inputImg}>Input img</div>
      <div className={styles.infoWrapper}>
        <h1>Create post</h1>
        <Form>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input title" }]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
          >
            <Input></Input>
          </Form.Item>
          <Form.Item label="Category">
            <Select
              options={[
                {
                  value: 1,
                  label: 1,
                },
                {
                  value: 2,
                  label: 2,
                },
                {
                  value: 3,
                  label: 3,
                },
                {
                  value: 4,
                  label: 4,
                },
                {
                  value: 5,
                  label: 5,
                },
              ]}
            ></Select>
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
          >
            <Input></Input>
          </Form.Item>
          <Button type="primary">Create post</Button>
        </Form>
      </div>
    </div>
  );
};

export default CreatePost;
