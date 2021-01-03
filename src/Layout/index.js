import React, { useState, useCallback, useLayoutEffect } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
// import Banner from "../components/Banner"
import GlobalStyles from "./GlobalStyles"
import { Helmet } from "react-helmet"

import { AppContainer, MainContent, Backdrop } from "./LayoutStyles"

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openSidebar = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeSidebar = useCallback(() => {
    setIsOpen(false)
  }, [])

  useLayoutEffect(() => {
    function onResize(e) {
      if (window.innerWidth >= 1050) {
        closeSidebar()
      }
    }

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [closeSidebar])

  return (
    <AppContainer>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {/* <Banner /> */}
      <Navbar openSidebar={openSidebar} />
      <MainContent>{children}</MainContent>
      <Footer />
      <Sidebar closeSidebar={closeSidebar} isOpen={isOpen} />
      <Backdrop tabIndex="-1" onClick={closeSidebar} isOpen={isOpen} />
    </AppContainer>
  )
}
