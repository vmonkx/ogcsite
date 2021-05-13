import styled from "styled-components"

const HeaderSectionStyled = styled.h2`
  width: 100%;
  font-size: 1.9rem;
  font-weight: 700;
  
  text-align: center;
  letter-spacing: -0.05rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.primaryColor.color400};

  background: linear-gradient(to left, #bdc3c7, #6c697c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`
export { HeaderSectionStyled }
