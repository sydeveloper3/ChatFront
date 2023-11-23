import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
const Welcome = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <Container>
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome,
        <span>{currentUser.username} !</span>
      </h1>
      <h3>Please select a chat to Start </h3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  img {
    height: 20rem;
  }
  @media screen and (max-width: 680px) {
    img {
      height: 8rem;
    }
    h1 {
      font-size: 16px;
    }
    h3 {
      font-size: 12px;
    }
  }

  span {
    color: #4e0eff;
  }
`;

export default Welcome;
