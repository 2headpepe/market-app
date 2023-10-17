import "./Cards.css";
import Card from "./Card/Card";
interface ExtendedCardProps {
  id: number;
  userId: number;
  title: string;
  city: string;
  postDate: string;
  text: string;
  images: string[];
  price: number;
  header?: {
    title: string;
    showMore: (e: React.MouseEvent<HTMLDivElement>) => void;
  };
}

const HeaderForCard = ({
  title,
  showMore,
}: {
  title: string;
  showMore?: (e: React.MouseEvent<HTMLDivElement>) => void;
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
            onClick={showMore}
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
    <span>
      {header && <HeaderForCard {...header} />}
      <Card {...props} />
    </span>
  );
}

export default ExtendedCard;
