import { NavLink } from "react-router-dom";
import { Button } from "../../styled";
import "./styles.css";

const SpaceCard = ({ id, title, description, backgroundColor, color }) => {
  return (
    <div
      className="container-spacecard"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <h2>{title}</h2>
      <p>{description}</p>

      <NavLink to={`/spaces/${id}`}>
        <Button>Visit Space</Button>
      </NavLink>
    </div>
  );
};

export { SpaceCard };
