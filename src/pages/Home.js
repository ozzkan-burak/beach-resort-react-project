import React from "react";
import { Link } from "react-router-dom";
// custom component
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="lüks odalar"
          subTitle="delüks odalar 499 TL' den başlayan fiyatlarla"
        >
          <Link to="/rooms" className="btn-primary">
            Odalar
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
