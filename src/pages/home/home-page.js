import React, { Component } from "react";
import Hero from "../../components/hero/hero";
import ShowItem from "../../components/show-item/show-item";

export default class HomePage extends Component {
  render() {
    // TODO: Get shows from DB
    const upcomingShows = [
      {
        id: 0,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
      {
        id: 1,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
      {
        id: 2,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
      {
        id: 3,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
      {
        id: 4,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
      {
        id: 5,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
      {
        id: 6,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
      {
        id: 7,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
      {
        id: 8,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
      {
        id: 9,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
      {
        id: 10,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
      {
        id: 11,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
      {
        id: 12,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
      {
        id: 13,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
      {
        id: 14,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
      {
        id: 15,
        imageUrl: "https://unsplash.it/150?random",
        name: "Bel Biv Devo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nisi ut hendrerit tristique.",
        date: new Date(),
      },
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
