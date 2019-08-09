import React from 'react'
import { Link } from 'react-router-dom';

// custom components
import Hero from '../components/Hero';
import Banner from '../components/Banner';


const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="Odalarımız" subtitle="Single, aile odaları birbirinden lüks seçenekler" >
        <Link to="/" className="btn-primary">Anasayfa</Link>
      </Banner>
    </Hero>
  )
}

export default Rooms
