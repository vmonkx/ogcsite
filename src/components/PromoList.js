import React from "react"
import styled from "styled-components"
import PromoListItem from "./PromoListItem"

const PromoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2.5rem;
`

function PromoList({ promos }) {
  
  return (
    <PromoContainer>
      {promos.map(promo => (
        <PromoListItem key={promo.id} promo={promo} />
      ))}
    </PromoContainer>
  )
}

export default PromoList
