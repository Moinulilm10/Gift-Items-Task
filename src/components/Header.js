import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import logo from "../Images/logo.png";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        {/* <img style={{ margin: "60px" }} src={logo} alt="mylogoimg" width="200" height="200" /> */}
        <Logo src={logo} alt="mylogoimg" />
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

const Logo = styled.img`
  height: 7rem;
  margin: 0 1rem; /* Add some margin for spacing between logo and other elements */

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    /* Adjust logo size for mobile devices */
    height: 6rem;
    margin: 0; /* Remove margin on mobile to align the logo to the left */
  }
`;
export default Header;
