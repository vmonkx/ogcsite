import React from "react"
import styled from "styled-components"
import SpecialistItem from "./SpecialistItem"

const SpecialistListStyled = styled.div`
  padding-top: 80px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 5rem;

  @media screen and (min-width: 768px) {
    grid-row-gap: 4rem;
  }

  @media screen and (min-width: 1024px) {
    grid-row-gap: 6rem;
  }

  @media screen and (min-width: 1440px) {
    grid-column-gap: 4rem;
    grid-row-gap: 5rem;
  }
  
`

function SpecialistList({ list }) {
  return (
    <SpecialistListStyled>
      {list.map((specialist) => (
        <SpecialistItem key={specialist.id} item={specialist} />
      ))}
    </SpecialistListStyled>
  )
}

export default SpecialistList
