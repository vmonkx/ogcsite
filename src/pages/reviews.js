import React from "react";
import Container from "../components/Container";
import HeaderService from "../components/HeaderService";
import Layout from "../components/layout";
import ReviewLinks from "../components/ReviewLinks";
import Seo from "../components/Seo";
import { Section } from "../components/Styled/Section";

function ReviewsPage() {
  return (
    <Layout>
      <Seo
        title="Оставить отзыв"
        description="Напишите нам отзыв - это поможет нам стать еще лучше для Вас!"
      />
      <Section>
        <Container>
          <HeaderService title="Напишите нам отзыв" />
          
          <ReviewLinks />
        </Container>
      </Section>
    </Layout>
  );
}

export default ReviewsPage;
