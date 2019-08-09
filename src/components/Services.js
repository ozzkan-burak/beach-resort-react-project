import React, { Component } from 'react'

//custom components
import Title from './Title';
//FontAwesome
import {FaCocktail, FaHiking,FaShuttleVan, FaBeer} from 'react-icons/fa'

class Services extends Component {
  state={
    services: [
      {
        icon: <FaCocktail />,
        title: "Ücretsiz Yerli İçekler"
      }
    ]
  }
  render() {
    return (
      <div>
        <Title title="services" />
        hello from services
      </div>
    )
  }
}

export default Services;