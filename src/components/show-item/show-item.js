import React from "react";
import { Link } from "react-router-dom";

const ShowItem = (props) => (
  <div className="show-item__container">
    <img src="https://via.placeholder.com/150" alt="Placeholder" className="show-item__image" />
    <h2 className="show-item__title">
      <Link to="/show/123">Bell Biv Devo</Link>
    </h2>
    <h3 className="show-item__date">xx/xx/xxxx</h3>
    <p className="show-item__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique. Mauris
      euismod ante ac purus consequat ornare in eu tortor.
    </p>
  </div>
);

export default ShowItem;
