import React, { useState, useCallback, useLayoutEffect } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import GlobalStyles from "./GlobalStyles"

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
      <Navbar openSidebar={openSidebar} />
      <MainContent>{children}</MainContent>
      <Sidebar closeSidebar={closeSidebar} isOpen={isOpen} />
      <Backdrop tabIndex="-1" onClick={closeSidebar} isOpen={isOpen} />
    </AppContainer>
  )
}
