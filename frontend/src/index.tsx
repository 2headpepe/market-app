import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import reportWebVitals from "./reportWebVitals";
import ViewPostsPage from "./pages/ViewPostsPage/ViewPostsPage";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import { IRootState } from "./store";

import "./index.css";
import UploadPhoto from "./components/UploadPhoto/UploadPhoto";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PostInfoPage from "./pages/PostInfoPage/PostInfoPage";
import CategoryBadge from "./components/CategoryBadge/CategoryBadge";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => (
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
      <Route
        path="postInfo"
        element={
          <PostInfoPage
            images={[
              "https://damion.club/uploads/posts/2022-09/1663879174_3-damion-club-p-dora-pevitsa-oboi-instagram-3.jpg",
              "https://damion.club/uploads/posts/2022-09/1663879174_3-damion-club-p-dora-pevitsa-oboi-instagram-3.jpg",
            ]}
            id={0}
            userId={0}
            title={"Mount Fuji"}
            text={
              "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            }
            categoryId={"Products"}
            price={1000}
            city={"Tokio"}
            postDate={Date()}
            sold={false}
          />
        }
      ></Route>
    </Routes>
  </BrowserRouter>
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
