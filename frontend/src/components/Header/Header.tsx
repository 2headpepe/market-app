import React from "react";
import styles from "./Header.module.css";
import Search, { SearchProps } from "antd/es/input/Search";
import { Link } from "react-router-dom";
import MoneyModal from "../Modals/MoneyModal/MoneyModal";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/auth/actionCreators";
import { useAppDispatch } from "../../store";

interface HeaderProps {
  showTitle?: boolean;
  showSearch?: boolean;
  showMoney?: boolean;
  showInfo?: boolean;
}

const Header = ({
  showTitle = true,
  showSearch = true,
  showMoney = true,
  showInfo = true,
}: HeaderProps) => {
  const dispatch = useAppDispatch();
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  const [moneyModal, setMoneyModal] = React.useState(false);

  function handleModal() {
    setMoneyModal((modal) => !modal);
  }
  function logoutHandle() {
    dispatch(logoutUser());
    
  }
  return (
    <nav className={styles.NavBar}>
      <Link
        to="../main"
        className={styles.left}
        style={{ opacity: showTitle ? 1 : 0 }}
      >
        <h1>MegaMarket</h1>
      </Link>

      <Search
        className={styles.search}
        onSearch={onSearch}
        placeholder="Search"
        style={{ opacity: showSearch ? 1 : 0 }}
      ></Search>

      <div className={styles.infoWrapper}>
        <div
          className={styles.icon}
          onClick={handleModal}
          style={{ opacity: showMoney ? 1 : 0 }}
        >
          <div className="primary2">0.00$</div>
        </div>

        <Link
          to="../profile"
          style={{ opacity: showInfo ? 1 : 0 }}
        >
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
        <Button onClick={logoutHandle}>LogOut</Button>
      </div>

      <MoneyModal
        modal={moneyModal}
        setModal={setMoneyModal}
      />
    </nav>
  );
};

export default Header;
