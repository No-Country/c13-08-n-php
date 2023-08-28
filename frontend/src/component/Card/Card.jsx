import "./Card.css"
import { Link } from "react-router-dom";

const Card = ({ id, imagen }) => {
  return (
    <div className="card">
      <figure>
        <Link to={`/Card/${id}`}>
          <img className="imgProductoCard" src={imagen} ></img>
        
        </Link>
        
      </figure>
    </div>
  );
};

export default Card;