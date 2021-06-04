import React from "react";
import Container from "../components/Container";

import Layout from "../components/layout";
import Seo from "../components/Seo";
import { Section } from "../components/Styled/Section";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Страница не найдена" />
    <Section>
      <Container>
        <h1>404: Страница не найдена</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Section>
  </Layout>
);

export default NotFoundPage;
