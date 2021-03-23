import styled from "styled-components"

export const SidebarContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;

  padding-top: 15rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  background: var(--bg-color);

  transition: transform 0.2s linear;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};

  #close-sidebar {
    position: absolute;
    top: 4rem;
    right: 4rem;

    display: block;
    justify-self: flex-end;
    
    background: #fff;
    border-radius: .5rem;
    transition: .2s;
    svg,
    svg path {
      fill: #ff6666;
    }
    &:hover,
    &:focus {
      cursor: pointer;
      svg,
      svg path {
        fill: #fff;
      }
      background: #ff6666;
    }
  }
`
export const SidebarContent = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 1rem 0;
  a {
    width: 100%;
    text-align: center;
    border-radius: 0.5rem;
    color: var(--text-white-1);
    font-size: 4rem;
    font-weight: 600;
    padding: 2rem 1rem;
    margin-bottom: 1.5rem;
    transition: all 0.2s ease-out;
    &:hover,
    &:focus {
      color: var(--color-primary);
    }
  }

  img {
    margin-top: 5rem;
    width: min(20rem, 50%);
  }
`
