/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";

import Footer from "./Footer";
import { Main, MainContainer } from "./Styled/Main";
import Modal from "./Modal";
import { useModalWindow } from "../contexts/ModalProvider";
import FormOrder from "./FormOrder";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }

      orderImg: file(relativePath: { eq: "OrderService.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 90
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  const { show, close } = useModalWindow();

  return (
    <>
      <Header />
      <MainContainer>
        <Main role="main">{children}</Main>

        <Modal
          showModal={show}
          closeModal={close}
          cover={data.orderImg.childImageSharp.gatsbyImageData}
          content={<FormOrder />}
        />
      </MainContainer>

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
