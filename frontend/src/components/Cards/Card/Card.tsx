import ShowPhoto from "../../ShowPhoto/ShowPhoto";

interface CardProps {
  id: number;
  title: string;
  city: string;
  postDate: string;
  text: string;
  images: string[];
  price: number;
}
const Card = (props: CardProps) => {
  const { images, city, title, postDate, text, price } = props;
  return (
    <div className="Card--wrapper">
      <ShowPhoto images={images}></ShowPhoto>
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
