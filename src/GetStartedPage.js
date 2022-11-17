import React from "react";
import styled from "styled-components";
import TodoSvg from "./svgs/TodoSvg";
import { NavLink } from "react-router-dom";
export const Page = styled.div`
  background-color: #000000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
const MainText = styled.h1`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  @media screen and (min-width: 1200px) {
    font-size: 54px;
  }
`;
const Button = styled.button`
  background-color: #5efc8d;
  color: black;
  font-weight: 300;
  font-size: 24px;
  width: 200px;
  height: 50px;
  margin-top: 100px;
  border: 0;
  cursor: pointer;
  transition: ease-out 0.3s;
  &:hover {
    background-color: #fff;
  }
  @media screen and (min-width: 1200px) {
    font-size: 48px;
    width: 388px;
    height: 98px;
    margin-top: 180px;
  }
`;
export default function GetStartedPage({ isLoggedIn }) {
  return (
    <Page>
      <TodoSvg />
      <MainText>Keep Track Of Daily Tasks In Life</MainText>
      <NavLink to="/signup">
        <Button>Get Started</Button>
      </NavLink>
    </Page>
  );
}
