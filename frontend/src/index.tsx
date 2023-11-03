import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import reportWebVitals from "./reportWebVitals";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import { IRootState } from "./store";

import "./index.css";
import UploadPhoto from "./components/UploadPhoto/UploadPhoto";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PostInfoPage from "./pages/PostInfoPage/PostInfoPage";
import CategoryBadge from "./components/CategoryBadge/CategoryBadge";
import AdminPage from "./pages/AdminPage/AdminPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/register"
        element={<RegisterPage />}
      ></Route>
      <Route
        path="/login"
        element={<LoginPage />}
      ></Route>
      <Route path=":userId">
        <Route
          path="main"
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
          path=":postId"
          element={<PostInfoPage />}
        ></Route>
      </Route>

      <Route
        path="admin"
        element={<AdminPage />}
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
