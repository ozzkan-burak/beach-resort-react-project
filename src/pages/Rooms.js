import React from "react";
import { Link } from "react-router-dom";
// custom components
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomContainer from "../components/RoomContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            Anasayfa
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;
