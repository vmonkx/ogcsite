import styled from "styled-components"

const FooterStyled = styled.footer`
  background: ${props => props.theme.primaryColor.color600};
  padding-top: 40px;
  margin-top: auto;
`

const FooterWrap = styled.div`
  max-width: ${props => props.theme.maxWidth};
  min-width: ${props => props.theme.minWidth};
  margin: 0 auto;
  padding: 0 20px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    min-width: 100%;
  }
  @media screen and (max-width: 960px) {
    padding: 0 2rem;
  }
  @media (max-width: 767px) {
    padding: 0 2rem;
  }
`

const FooterRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`

const FooterImageWrap = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`

const FooterLogo = styled.img`
  margin: 0 auto;
  display: block;
`

const FooterText = styled.p`
  color: ${props => props.theme.primaryColor.color100};
  text-align: center;
  margin-top: 1rem;
`

export {
  FooterStyled,
  FooterWrap,
  FooterRow,
  FooterImageWrap,
  FooterLogo,
  FooterText,
}
