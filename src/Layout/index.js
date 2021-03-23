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
  const [isSticky, setIsSticky] = useState(false)
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false)

  function toggleDropdown(e) {
    if(e.target.id === "services") {
      setDropDownIsOpen(!dropDownIsOpen);
    } else {
      setDropDownIsOpen(false);
    }
  }

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
    function onAppScroll(e) {
      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("resize", onResize)
    window.addEventListener("scroll", onAppScroll)

    return () => {
      window.removeEventListener("resize", onResize)
      window.removeEventListener("scroll", onAppScroll)
    }
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
      <Navbar openSidebar={openSidebar} isSticky={isSticky} toggleDropdown={toggleDropdown} dropDownIsOpen={dropDownIsOpen} />
      <MainContent onClick={toggleDropdown}>{children}</MainContent>
      <Footer />
      <Sidebar closeSidebar={closeSidebar} isOpen={isOpen} />
      <Backdrop tabIndex="-1" onClick={closeSidebar} isOpen={isOpen} />
    </AppContainer>
  )
}
