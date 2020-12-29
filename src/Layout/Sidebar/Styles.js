import styled from "styled-components"

export const SidebarContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(0.5rem);

  transition: transform 0.2s ease-in;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};

  #close-sidebar {
    display: block;
    justify-self: flex-end;
    margin-right: 1.5rem;
    svg,
    svg path {
      fill: var(--color-secondary);
    }

    &:hover,
    &:focus {
      cursor: pointer;
      svg,
      svg path {
        fill: var(--text-white-1);
      }
      background: var(--color-quaternary);
    }
  }
`
export const SidebarContent = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  a {
    width: 100%;
    text-align: center;
    border-radius: 0.5rem;
    color: var(--color-primary);
    font-size: 4rem;
    font-weight: 600;
    padding: 2rem 1rem;
    margin-bottom: 1.5rem;
    transition: all 0.2s ease-out;
    &:hover,
    &:focus {
      color: var(--color-secondary);
    }
  }

  img {
    width: min(20rem, 50%);
  }
`
