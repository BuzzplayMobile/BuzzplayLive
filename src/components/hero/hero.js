import React from "react";

const Hero = (props) => (
  <div className="hero" style={{ backgroundImage: `url(${props.image})` }}>
    {props.children}
  </div>
);

export default Hero;
