import "./Card.css"
import { Link } from "react-router-dom";

const Card = ({ imagen }) => {
  return (
    <div className="card">
      <figure>
        <Link to={`/`}>
          <img className="imgProductoCard" src={imagen} ></img>
        
        </Link>
        
      </figure>
    </div>
  );
};

export default Card