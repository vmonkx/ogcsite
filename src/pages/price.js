import React from "react";
import { graphql } from "gatsby";
import Accordion from "../components/Accordion";
import Container from "../components/Container";
import HeaderService from "../components/HeaderService";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import {
  PriceListContainer,
  PriceHeaderCategory,
  PriceHeaderDescription,
  PriceSectionStyled,
  PriceContentWrap,
  PriceHeaderWrapper,
  PriceHeaderService,
  PriceItemWrap,
} from "../components/Styled/PriceSectionStyled";
import { Section } from "../components/Styled/Section";

function PricePage({ data }) {
  const { categories } = data.strapi;

  const getServicePriceList = (prices) => {
    return (
      <div>
        <Accordion items={prices} />
      </div>
    );
  };

  return (
    <Layout>
      <Seo
        title="Стоимость услуг в клинике"
        description="Стоимость услуг в клинике доктора Горчаковой - OGС clinic"
      />
      <Section>
        <Container>
          <HeaderService title="Стоимость услуг в клинике" />
          <PriceListContainer>
            {categories.map((category) => (
              <PriceSectionStyled key={category.id}>
                <>
                  <PriceHeaderWrapper>
                    <PriceHeaderCategory>{category.name}</PriceHeaderCategory>
                    <PriceHeaderDescription>
                      Нажмите на название процедуры ниже, чтобы
                      развернуть/свернуть содержимое.
                    </PriceHeaderDescription>
                  </PriceHeaderWrapper>
                  <PriceContentWrap>
                    {category.services?.map((service) => (
                      <PriceItemWrap key={service.id}>
                        <PriceHeaderService>{service.name}</PriceHeaderService>

                        {getServicePriceList(service.prices)}
                      </PriceItemWrap>
                    ))}
                  </PriceContentWrap>
                </>
              </PriceSectionStyled>
            ))}
          </PriceListContainer>
        </Container>
      </Section>
      <Section></Section>
    </Layout>
  );
}

export default PricePage;

export const query = graphql`
  query {
    strapi {
      categories {
        name
        id
        services {
          id
          name
          prices {
            id
            title
            priceItem {
              code
              description
              id
              duration
              name
              price
            }
          }
        }
      }
    }
  }
`;
