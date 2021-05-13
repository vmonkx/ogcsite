import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/components/pagination/pagination.min.css"
import PromoListItem from "./PromoListItem"

const PromoListContainer = styled.div`
  .swiper-container {
    padding-bottom: 50px;
  }

  .swiper-pagination {
    padding: 5px 0;
  }
  .swiper-pagination-bullet-active {
    background: ${props => props.theme.secondary};
  }
`





function PromoSliderList({ promotions }) {
  return (
    <PromoListContainer>
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          // when window width is >= 320px

          // when window width is >= 480px
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {promotions.map(promo => {
          return (
            promo && (
              <SwiperSlide key={promo.id}>
                <PromoListItem promo={promo} />
              </SwiperSlide>
            )
          )
        })}
      </Swiper>
    </PromoListContainer>
  )
}

export default PromoSliderList
