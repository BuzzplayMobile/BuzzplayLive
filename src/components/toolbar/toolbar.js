import React from "react";

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
        <img src="https://picsum.photos/100/40?random" alt="Logo" className="logo" />
        <button className="login-button">Login</button>
      </div>
    );
  }
}
