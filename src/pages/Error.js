import React from "react";
//custom components
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Hero>
      <Banner title="404" subTitle="aradığınız sayfa bulunamadı">
        <Link to="/" className="btn-primary">
          Anasayfa
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
