import { graphql } from "gatsby";
import React from "react";
import DocContent from "../components/DocContent";
import Layout from "../components/layout";

function DocPageTemplate({data}) {
  const { doc } = data.strapi;
  return (
    <Layout>
      <DocContent doc={doc} />
    </Layout>
  );
}

export default DocPageTemplate;

export const query = graphql`
  query ($id: ID!) {
    strapi {
      doc(id: $id) {
        id
        slug
        title
        content
      }
    }
  }
`;
