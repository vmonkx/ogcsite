import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ContactMap from "../components/ContactMap";
import ContactsInfo from "../components/ContactsInfo";
import { Section } from "../components/Styled/Section";
import HeaderService from "../components/HeaderService";
import Seo from "../components/Seo";

function Contacts({ data }) {
  const { defaultSeo } = data.strapi.global;
  return (
    <Layout>
      <Section>
        <Seo
          title="Наши контакты"
          description="Сведения о медицинской организации. Контактная информация о Клинике доктора Горчаковой - OGC clinic"
          cover={defaultSeo?.shareImage.urlSharp.childImageSharp.resize.src}
        />
        <HeaderService title="Контакты" />
        <ContactsInfo />
        <ContactMap />
      </Section>
    </Layout>
  );
}

export default Contacts;

export const query = graphql`
  query {
    strapi {
      global {
        defaultSeo {
          description
          lang
          title
          shareImage {
            id
            mime
            url
            urlSharp {
              childImageSharp {
                resize(width: 1200, quality: 90) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
