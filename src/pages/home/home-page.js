import React, { Component } from "react";
import Hero from "../../components/hero/hero";
import ShowItem from "../../components/show-item/show-item";

export default class HomePage extends Component {
  render() {
    // TODO: Get shows from DB
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
      <>
        <Hero image="https://unsplash.it/1500?random">
          <input placeholder="Search" type="text" className="hero__search" />
        </Hero>
        <div className="home-page__upcoming">
          <h2 className="home-page__upcoming-list--title">SHOWS THIS WEEK</h2>
          <div className="home-page__upcoming-list">
            {upcomingShows.map((show) => (
              <ShowItem key={show.id} show={show} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
