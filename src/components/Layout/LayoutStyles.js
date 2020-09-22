import styled from "styled-components"

export const AppContainer = styled.div``

export const MainContent = styled.main`
  padding-top: 0.5rem;
`

export const Backdrop = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.5);
`
