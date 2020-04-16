import React from "react";
import { Link } from "react-router-dom";

const ShowItem = (props) => (
  <div className="show-item__container">
    <img src={props.show.imageUrl} alt="Placeholder" className="show-item__image" />
    <h2 className="show-item__title">
      <Link to="/show/123">{props.show.name}</Link>
    </h2>
    <h3 className="show-item__date">{props.show.date.toString()}</h3>
    <p className="show-item__description">{props.show.description}</p>
  </div>
);

export default ShowItem;
