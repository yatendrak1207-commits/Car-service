import { Link } from "react-router-dom";
import "./serviceCard.css";

function ServiceCard({ icon, title, description, price, slug }) {
  return (
    <div className="service-card">
      {/* Service icon */}
      <div className="service-icon">{icon}</div>

      {/* Service details */}
      <div className="service-card-content">
        <h3>{title}</h3>

        <p>{description}</p>

        {/* Price and details link */}
        <div className="service-card-bottom">
          <span>Starting {price}</span>

          <Link to={`/services/${slug}`}>View Details →</Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
