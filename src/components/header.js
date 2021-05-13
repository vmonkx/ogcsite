
import React from "react"
import Navbar from "./Navbar"

const Header = () => (
  <header
    style={{
      position: "fixed",
      top: 0,
      width: "100vw",
      zIndex: 100,
    }}
  >
    <Navbar />
  </header>
)



export default Header
