import React from 'react'
import { Link } from 'react-router-dom';

// custom components
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import Services from "../components/Services";

const Home = () => {
  return (
    <>
    <Hero>
      <Banner title="Lüks Odalar" subtitle="5 Yıldızlı otel, delux odalar 999 TL'den başlayan fiyatlar">
        <Link to="/rooms" className="btn-primary">Oda Seç</Link>
      </Banner>
    </Hero>
    <Services />
    </>
    )  
}

Hero.defaultProps = {
  hero:'defaultHero'
}

export default Home
