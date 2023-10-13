import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import LandingPage from "./pages/LandingPage/LandingPage";
// import {root} from '.';
import reportWebVitals from "./reportWebVitals";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ViewPostsPage from "./pages/ViewPostsPage/ViewPostsPage";
import Modal from "./components/Modals/Modal/Modal";
import CreatePost from "./components/Modals/CreatePost/CreatePost";
import data from "./data";
import PostList from "./components/PostList/PostList";
import MoneyModal from "./components/Modals/MoneyModal/MoneyModal";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";

import { IRootState } from "./store";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  const isLoggedIn = useSelector(
    (state: IRootState) => state.auth.authData.accessToken
  );
  console.log(isLoggedIn);

  // useSelector((state: IRootState) =>
  //   console.log(state.auth.authData.accessToken + "__")
  // );
  // return <div>{isLoggedIn ? <LoginPage /> : <>Легенда</>}</div>;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="register"
          element={<RegisterPage />}
        ></Route>
        <Route
          path="login"
          element={<LoginPage />}
        ></Route>
        <Route
          path="*"
          element={
            <PrivateRoute>
              <LandingPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="posts"
          element={
            <PrivateRoute>
              <ViewPostsPage />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
