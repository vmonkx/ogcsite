import React from "react"
import styled from "styled-components"

const HeaderServiceStyled = styled.h1`
  
  font-weight: 700;
  line-height: 37px;
  text-align: center;
  
  margin-bottom: 2.5rem;
  background: linear-gradient(to left, #bdc3c7, #6c697c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media screen and (min-width: 1440px) {
    font-size: 45px;
    line-height: 49px;
  }
`

function HeaderService({ title }) {
  return <HeaderServiceStyled>{title}</HeaderServiceStyled>
}

export default HeaderService
