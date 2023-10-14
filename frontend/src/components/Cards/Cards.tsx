import "./Cards.css";
import Card from "./Card/Card";
interface ExtendedCardProps {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  imageUrl: string;
  price: number;
  header?: {
    title: string;
    showMore: boolean;
  };
}

const HeaderForCard = ({
  title,
  showMore,
}: {
  title: string;
  showMore?: boolean;
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h2>{title}</h2>
        {showMore && (
          <div
            className={`secondary`}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Show more
          </div>
        )}
      </div>
      <hr />
    </>
  );
};

function ExtendedCard(props: ExtendedCardProps) {
  const { header } = props;
  return (
    <div>
      {header && <HeaderForCard {...header} />}
      <Card {...props} />
    </div>
  );
}

export default ExtendedCard;
