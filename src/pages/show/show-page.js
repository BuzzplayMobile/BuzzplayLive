import React from "react";
import { withRouter } from "react-router-dom";
import Hero from "../../components/hero/hero";

class ShowPage extends React.Component {
  render() {
    // const { path, url } = this.props.match;
    // const showId = url.substring(url.lastIndexOf("/") + 1);
    return (
      <div className="show-page__container">
        <Hero image="https://unsplash.it/1500?random">
          <h1>Artist name</h1>
          <div>
            <span>Thursday</span>
            <span>April 15, 2020</span>
            <span>2:00PM EST</span>
          </div>
          <button className="show-page__hero-watch-button">Watch Now</button>
        </Hero>
        <div className="show-page__header">
          <img src="https://unsplash.it/450?random" alt="Show" />
          <h2>Bel Biv Devo</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.
            Mauris euismod ante ac purus consequat ornare in eu tortor.
          </p>
          <button>Join LiveStream</button>
        </div>
      </div>
    );
  }
}

export default withRouter(ShowPage);
