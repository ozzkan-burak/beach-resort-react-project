import React from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

class SingleRoom extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Single room componentinten yazdırıldı" + this.props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = RoomContext;
  // componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>eşleşen oda bulunamadı</h3>
          <Link to="/rooms" className="btn-primary">
            Geri dön
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultImg] = images;
    console.log(defaultImg);
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} odamız`}>
            <Link to="/rooms" className="btn-primary">
              odalar
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Odayı detayı</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>bilgi</h3>
              <h6>fiyat: {price}TL</h6>
              <h6>odanın ölçüsü: {size / 8} m2</h6>
              <h6>
                max kapasite:{" "}
                {capacity > 1
                  ? `${capacity} kişilik grup - aile`
                  : `${capacity} kişi`}
              </h6>
              <h6>
                {pets
                  ? "evcil hayvan kabul edilmektedir."
                  : "evcil hayvan kabul edilmemektedir."}
              </h6>
              <h6>{breakfast && "kahvaltı dahil"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>ücrete dahil olmayanlar</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}> - {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

// const SingleRoom = props => {
//   console.log("Single room componentinden yazıldı" + props);

//   return <div className="">hello from single room page</div>;
// };

export default SingleRoom;
