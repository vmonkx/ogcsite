import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const HeaderStyled = styled.header`
  position: "fixed";
  top: 0;
  width: "100vw";
  z-index: 100;
`;

const Header = () => (
  <HeaderStyled>
    <Navbar />
  </HeaderStyled>
);

export default Header;
