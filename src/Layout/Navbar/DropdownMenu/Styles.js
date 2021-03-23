import styled from 'styled-components';

export const DropdownContainer = styled.ul`
  display: var(--displayVar, none);
  flex-direction: column;
  align-items: stretch;

  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 1rem 1rem rgba(0,0,0,.5);
  border-top: .1rem solid #F1F5F9;
  border-radius: 0 0 .5rem .5rem;
`;

export const DropdownItem = styled.li`
  font-size: 3rem;
  padding: 1rem 2rem;
  user-select: none;
  a {
    color: var(--bg-color);
    display: block;
    width: 100%;
    height: 100%;
  }
  &:hover {
    cursor: pointer;
    background-color: #F1F5F9;
  }
`;