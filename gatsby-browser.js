/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
require("@fontsource/inter/variable-full.css")
require("swiper/swiper.min.css")
const { theme } = require("./src/theme/theme")
const { ThemeProvider } = require("styled-components")
const { ModalProvider } = require("./src/contexts/ModalProvider")
const { GlobalStyle } = require("./src/components/Styled/GlobalStyled")
const { default: WidgetChat } = require("./src/components/WidgetChat")

exports.wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider {...props} theme={theme}>
      <GlobalStyle />

      <ModalProvider>{element}</ModalProvider>
      <WidgetChat />
    </ThemeProvider>
  )
}
