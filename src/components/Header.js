import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import logo from "../Images/logo.png"

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
          <img style={{ margin: "60px" }} src={logo} alt="mylogoimg" width="200" height="200" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;
