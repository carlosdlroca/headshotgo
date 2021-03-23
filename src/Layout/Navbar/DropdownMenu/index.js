import React from 'react';
import { DropdownContainer, DropdownItem } from "./Styles";

export default function DropdownMenu({children, isOpen}) {
  return (
    <DropdownContainer style={{"--displayVar": isOpen? "flex": "none"}}>
      {React.Children.map(children, child => (
        <DropdownItem role="menuItem">
          {child}
        </DropdownItem>
      ))}
    </DropdownContainer>
  )
}
