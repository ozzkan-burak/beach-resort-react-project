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
        title: "Alkollü - Alkosüz Kokteyller",
        info: "Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, corpis!"
      },
      {
        icon: <FaHiking />,
        title: "Outdoor Spor Aktiviteleri",
        info: "Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, corpis!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Ücretsiz ",
        info: "Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, corpis!"
      },
      {
        icon: <FaBeer />,
        title: "Ücretsiz Yerli İçekler",
        info: "Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, corpis!"
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="otel özellikleri" />
        <div className="services-center">
          {this.state.services.map((item,index)=>{
            return(
              <article key={index}>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
             );
          })}
        </div>
      </section>
    )
  }
}

export default Services;