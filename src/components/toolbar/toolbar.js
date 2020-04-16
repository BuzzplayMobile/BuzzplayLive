import React from "react";
import { Link } from "react-router-dom";

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { email: "test@test.com" },
    };
  }

  render() {
    return (
      <div className="toolbar">
        <Link to="/">
          <img src="https://picsum.photos/100/40?random" alt="Logo" className="Buzzplay logo" />
        </Link>
        <button className="login-button">Login</button>
      </div>
    );
  }
}
