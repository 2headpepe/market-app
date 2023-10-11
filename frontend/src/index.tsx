import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import LandingPage from "./pages/LandingPage/LandingPage";
// import {root} from '.';
import reportWebVitals from "./reportWebVitals";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="register"
          element={<RegisterPage param={"1"} />}
        ></Route>
        <Route
          path="login"
          element={<LoginPage />}
        ></Route>
        <Route
          path="*"
          element={<LandingPage />}
        ></Route>
        <Route
          path="profile"
          element={<ProfilePage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
