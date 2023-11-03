import { useNavigate } from "react-router-dom";
import ShowPhoto from "../ShowPhoto/ShowPhoto";
import React from "react";
import "./Cards.css";

export interface CardProps {
  id: number;
  userId: number;
  title: string;
  city: string;
  postDate: string;
  text: string;
  images: string[];
  price: number;
}
const Card = (props: CardProps) => {
  const { images, city, title, postDate, text, price, id } = props;
  const navigate = useNavigate();
  function clickHandle(event: React.MouseEvent) {
    if (
      event.target instanceof HTMLElement &&
      event.target.className !== "button"
    ) {
      navigate("/1/1", { state: props });
    }
  }
  return (
    <div
      className="Card--wrapper"
      onClick={clickHandle}
    >
      <ShowPhoto
        images={images}
        height="40vh"
        width="40vh"
      ></ShowPhoto>
      <div className="Card--info-wrapper">
        <div className="Card--location--wrapper">
          <img
            src="./images/location.svg"
            alt=""
            className="Card--location--icon"
          />
          <p className="Card--location--text">{city}</p>
          <p className="Card--dates">{postDate}</p>
        </div>

        <h3 className="Card--name">{title}</h3>
        <p className="Card--text">{text}</p>
        <h4 className="Card--price">{price + "$"}</h4>
      </div>
    </div>
  );
};

export default Card;
