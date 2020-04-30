import React from "react";
//import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

const Room = ({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="tekli oda" />
        <div className="price-top">
          <h6>Gecelik Fiyat {price} TL</h6>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          detay
        </Link>
      </div>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf().isRequired,
    price: PropTypes.number.isRequired
  })
};

export default Room;
