import { Button } from "antd";
import Star from "../../../../components/Star/Star";
import styles from "./ProfileInfo.module.css";

const TwoLineInfo = ({
  main,
  secondary,
}: {
  main: string;
  secondary: string;
}) => {
  return (
    <div className={styles.blockWrapper}>
      <div className="secondary2">{main}</div>
      <div className="primary2">{secondary}</div>
    </div>
  );
};

const ProfileInfo = () => {
  const info = [
    { main: "Status", secondary: "User" },
    { main: "Email", secondary: "myemail@gmail.com" },
    { main: "Birthdate", secondary: "21.12.2003" },
    { main: "Password", secondary: "password" },
  ].map((e) => <TwoLineInfo {...e} />);

  return (
    <>
      <img
        src="https://damion.club/uploads/posts/2022-09/1663879174_3-damion-club-p-dora-pevitsa-oboi-instagram-3.jpg"
        alt="photo"
        className={styles.profilePhoto}
      />

      <div className={styles.infoWrapper}>
        <div className={styles.mainInfoWrapper}>
          <div className="primary">Your name</div>
          <div className="secondary2">Since 21.12.2003</div>
        </div>
        <Star rating={4}></Star>

        <hr />

        {info}
      </div>

      <hr className={styles.hr} />

      <div className={styles.buttonWrapper}>
        <Button type="primary">Add post</Button>
        <Button>Edit profile</Button>
      </div>
    </>
  );
};

export default ProfileInfo;
