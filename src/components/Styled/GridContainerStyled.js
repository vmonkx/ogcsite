import styled from "styled-components"

const GridContainerStyled = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-gap: 25px;
  margin: 25px auto;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: min-content;
`

export { GridContainerStyled }
