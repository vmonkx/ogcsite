/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react";

import "@fontsource/inter/variable-full.css";
import "swiper/swiper.min.css";
import { theme } from "./src/theme/theme";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "./src/contexts/ModalProvider";
import { GlobalStyle } from "./src/components/Styled/GlobalStyled";
import WidgetChat from "./src/components/WidgetChat";

export function wrapPageElement({ element, props }) {
  return (
    <ThemeProvider {...props} theme={theme}>
      <GlobalStyle />

      <ModalProvider>{element}</ModalProvider>

      <WidgetChat />
    </ThemeProvider>
  );
}
//gatsby-browser.js

export const onServiceWorkerUpdateReady = async () =>
  typeof window !== "undefined" && window.location.reload(true);
