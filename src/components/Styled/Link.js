import { Link } from "gatsby"
import styled from "styled-components"

const LinkStyl = styled(Link)`
  display: block;
  position: relative;

  user-select: none;

  cursor: pointer;
  color: ${props => props.theme.primaryColor.color400};
  margin: 0;

  font-size: 1rem;

  text-decoration: none;
  font-weight: 600;

  &:hover {
    transition-delay: 0.6s;
    background-image: linear-gradient(
      0deg,
      rgba(249, 81, 110, 1) 0%,
      rgba(205, 2, 107, 1) 100%
    );
    transition: all 0.4s cubic-bezier(0, 0, 0.23, 1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-position: 0%;
    background-size: 340% 100%;
  }
`

const LinkStyled = styled(LinkStyl)`
  &:after {
    position: absolute;
    display: block;
    transform: scaleX(0);
    bottom: -5px;
    left: 0;
    background: linear-gradient(
      0deg,
      rgba(249, 81, 110, 1) 0%,
      rgba(205, 2, 107, 1) 100%
    );
    width: 100%;
    content: "";
    height: 2px;
    transition: -webkit-transform 250ms ease-in-out;
    transition: transform 250ms ease-in-out;
    transition: transform 250ms ease-in-out, -webkit-transform 250ms ease-in-out;
    transform-origin: 100% 50%;
  }

  &:hover:after {
    background-image: linear-gradient(
      0deg,
      rgba(249, 81, 110, 1) 0%,
      rgba(205, 2, 107, 1) 100%
    );
    transform: scaleX(1);
    transform-origin: 0 50%;
  }
`

export { LinkStyl, LinkStyled }
