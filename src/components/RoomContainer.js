import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../context';

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomsFilter from "./RoomFilter";
// import RoomsList from "./RoomList";
// import { RoomConsumer } from "../context";

// const RoomContainer = () => {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { sortedRooms, rooms } = value;

//         return (
//           <>
//             Hello froms Rooms Container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomContainer;
