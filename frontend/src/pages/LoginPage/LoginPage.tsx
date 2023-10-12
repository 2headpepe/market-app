import React from "react";

import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

import styles from "./LoginPage.module.css";
import { loginUser } from "../../store/auth/actionCreators";
import { useAppDispatch } from "../../store";
import { Dispatch } from "@reduxjs/toolkit";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  function loginHandle(values: { login: string; password: string }) {
    dispatch(loginUser(values));
  }
  return (
    <div className={styles.LoginPage}>
      <div className={styles.formWrapper}>
        <h1>Login</h1>
        <Form
          layout="vertical"
          onFinish={loginHandle}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email" }]}
          >
            <Input></Input>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your email" }]}
          >
            <Input></Input>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <nav className={styles.formNav}>
          <span>Don't have an account?</span>
          <Link
            to="/register"
            className={styles.signupLink}
          >
            Sign up
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default LoginPage;