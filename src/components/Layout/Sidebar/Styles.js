import styled from "styled-components"

export const SidebarContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: min(80vw, 30rem);

  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  background: white;
  padding: 1.5rem 0 3rem;

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
        fill: var(--color-primary);
      }
      background: var(--color-quaternary);
    }
  }
`
export const SidebarContent = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  a {
    border-radius: 0.5rem;
    color: var(--color-secondary);
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.5rem 1rem;
    margin-bottom: 1.5rem;
    transition: all 0.2s ease-out;
    &:hover,
    &:focus {
      background-color: var(--color-quaternary);
      color: var(--color-primary);
    }
  }
`
