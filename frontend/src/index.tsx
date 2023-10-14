import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import reportWebVitals from "./reportWebVitals";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ViewPostsPage from "./pages/ViewPostsPage/ViewPostsPage";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import { IRootState } from "./store";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  return (
    <BrowserRouter>
      {/* <div>
        <h1>hello</h1>
        <div className="primary">Your name</div>
        <div className="secondary">secondary</div>
        <div className="primary2">Primary2</div>
        <div className="secondary2">secondary2</div>
      </div> */}
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
