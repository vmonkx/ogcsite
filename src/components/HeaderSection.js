import React from "react";
import styled from "styled-components";
import { HeaderSectionStyled } from "./Styled/HeaderSection";

const DescrTooltip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme.primary};
    text-align: center;
  }
`;

function HeaderSection({ title, descr }) {
  return (
    <React.Fragment>
      <HeaderSectionStyled>{title}</HeaderSectionStyled>
      <DescrTooltip>
        <span>{descr}</span>
      </DescrTooltip>
    </React.Fragment>
  );
}

export default HeaderSection;
