import React from "react"
import styled from "styled-components"

const ContainerStyled = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1rem;

  

  @media screen and (min-width: 1280px) {
    max-width: 976px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
  }
`

function Container({ children }) {
  return <ContainerStyled>{children}</ContainerStyled>
}

export default Container
