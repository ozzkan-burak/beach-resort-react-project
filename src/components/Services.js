import React, { Component } from "react";
// custom component
import Title from "./Title";
// icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Alkollü - Alkolsüz Kokteyller",
        info: "Lorem ipsum dolor sit amet, lorem ipsum"
      },
      {
        icon: <FaHiking />,
        title: "Doğayla iç içe yürüyüş keyfi",
        info: "Lorem ipsum dolor sit amet, lorem ipsum"
      },
      {
        icon: <FaShuttleVan />,
        title: "Ücretsiz Transfer",
        info: "Lorem ipsum dolor sit amet, lorem ipsum"
      },
      {
        icon: <FaBeer />,
        title: "Sınırsız Yerli İçecekler",
        info: "Lorem ipsum dolor sit amet, lorem ipsum"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Hizmetler" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
