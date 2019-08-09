import React, { Component } from 'react';

// context
import {RoomContext} from "../context";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default FeaturedRooms;