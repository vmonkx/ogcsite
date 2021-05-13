import styled from "styled-components"

const GridItemHeader = styled.div`
  box-sizing: border-box;
  padding-bottom: 0;
  z-index: 1;

  &.content-column {
    flex-basis: 47%;
    flex-grow: 1;
    flex-shrink: 0;
  }

  h3 {
    background-image: linear-gradient(
      20deg,
      rgba(205, 2, 107, 1) 0%,
      rgba(249, 81, 110, 1) 100%
    );

    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }

  &.alter-color {
    h3 {
      background-color: #ff3cac;
      background-image: linear-gradient(
        305deg,
        #ff3cac 0%,
        #784ba0 50%,
        rgba(159, 145, 172, 1) 100%
      );
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
  }
`

export { GridItemHeader }
