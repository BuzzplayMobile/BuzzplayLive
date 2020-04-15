import React from "react";
import { withRouter } from "react-router-dom";
import Hero from "../../components/hero/hero";
import ShowItem from "../../components/show-item/show-item";

class ShowPage extends React.Component {
  render() {
    // const { path, url } = this.props.match;
    // const showId = url.substring(url.lastIndexOf("/") + 1);
    const upcomingShows = [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
    ];
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
        <div className="show-page__upcoming">
          <h2 className="show-page__upcoming-list--title">Upcoming shows</h2>
          <div className="show-page__upcoming-list">
            {upcomingShows.map((show) => (
              <ShowItem key={show.id} show={show} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ShowPage);
