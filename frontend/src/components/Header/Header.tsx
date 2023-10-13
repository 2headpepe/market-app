import React from "react";
import styles from "./Header.module.css";
import Search, { SearchProps } from "antd/es/input/Search";
import { Link } from "react-router-dom";

const Header = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <nav className={styles.NavBar}>
      <div className={styles.left}>
        <h1>Fake avito</h1>
      </div>

      <Search
        className={styles.search}
        onSearch={onSearch}
        placeholder="Search"
      ></Search>
      <Link to="/profile">
        <div className={styles.infoWrapper}>
          <div className={styles.icon}>
            <div className={styles.money}>0.00$</div>
          </div>
          <div>
            <div className={styles.name}>Your name</div>
            <div className={styles.status}>Status</div>
          </div>
          <img
            className={styles.photo}
            src="https://38s.musify.club/img/68/22744618/58256306.jpg"
            alt="icon"
            height={48}
          />
        </div>
      </Link>
    </nav>
  );
};

export default Header;
