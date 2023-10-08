import "./Card.css";

function Card(props) {
  const { imageUrl, location, title, startDate, description, price } = props;
  return (
    <div className="Card--wrapper">
      <img
        src={imageUrl}
        alt=""
        className="Card--image"
      />
      <div className="Card--info-wrapper">
        <div className="Card--location--wrapper">
          <img
            src="./images/location.svg"
            alt=""
            className="Card--location--icon"
          />
          <p className="Card--location--text">{location}</p>
          <p className="Card--dates">{startDate}</p>
        </div>

        <h3 className="Card--name">{title}</h3>
        <p className="Card--text">{description}</p>
        <h4 className="Card--price">{price + "$"}</h4>
      </div>
    </div>
  );
}

export default Card;
