import { url } from "inspector";
import { NextPage } from "next";

interface Props {
  imageUrl?: string;
  title?: string;
  description?: string;
  onClick?: () => any;
}
const ServiceCard: NextPage<Props> = ({
  imageUrl,
  title,
  description,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="image-service-card">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="service-card"
      ></div>
      <div className="floated-menu">
        <div className="wrapper">
          <h3 className="text-purple">{title}</h3>

          <h5 className="text-grey">
            <p>{description}</p>
          </h5>
        </div>
        <div className="booknow-button">
          <h2>BOOK NOW</h2>
        </div>
      </div>
    </div>
  );
};

ServiceCard.defaultProps = {
  imageUrl: "/bg9.png",
  title: "Mega Volume Eye Lashes",
  description: "",
};

export default ServiceCard;
