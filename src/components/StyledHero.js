import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";
const orange = "#ff00ff";

// const SimpleButton = styled.button`
//   color: white;
//   background: ${orange};
//   padding: 10px;
//   border: 1px solid #0147a3;
//   border-radius: 4px;
//   font-size: 3rem;
// `;

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${props => (props.img ? props.img : defaultImg)}) center/cover
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
