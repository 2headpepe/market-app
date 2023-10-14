import React from "react";
import styles from "./Header.module.css";
import Search, { SearchProps } from "antd/es/input/Search";
import { Link } from "react-router-dom";
import MoneyModal from "../Modals/MoneyModal/MoneyModal";

const Header = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  const [moneyModal, setMoneyModal] = React.useState(false);

  function handleModal() {
    setMoneyModal((modal) => !modal);
  }

  return (
    <nav className={styles.NavBar}>
      <Link
        to="/"
        className={styles.left}
      >
        <h1>Fake avito</h1>
      </Link>

      <Search
        className={styles.search}
        onSearch={onSearch}
        placeholder="Search"
      ></Search>

      <div className={styles.infoWrapper}>
        <div
          className={styles.icon}
          onClick={handleModal}
        >
          <div className="primary2">0.00$</div>
        </div>

        <Link to="/profile">
          <div className={styles.info}>
            <div>
              <div className="primary">Your name</div>
              <div className="secondary">Status</div>
            </div>
            <img
              className={styles.photo}
              src="https://38s.musify.club/img/68/22744618/58256306.jpg"
              alt="icon"
              height={48}
            />
          </div>
        </Link>
      </div>

      <MoneyModal
        modal={moneyModal}
        setModal={setMoneyModal}
      />
    </nav>
  );
};

export default Header;
