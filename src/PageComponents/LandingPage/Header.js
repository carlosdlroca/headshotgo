import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledHeader = styled.header`
  background-image: url("/header-image.jpg");
  background-size: cover;
  background-position: center;

  display: grid;
  justify-items: center;
  align-content: center;

  height: 85rem;
  color: white;

  h1 {
    font-size: 6rem;
    text-align: center;
    line-height: 1.8;
    text-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 1);
  }

  span {
    font-size: 2.1rem;
    width: 50%;
    line-height: 1.8;
    text-align: center;
    margin: 3rem 0 8rem;
    text-shadow: 0 0 1rem rgba(0, 0, 0, 1);
  }
  a {
    line-height: 1.8;
    font-size: 2.1rem;
    color: var(--text-white-1);
    background: var(--color-primary);
    padding: 1rem 3rem;
    border-radius: 0.8rem;
    transition: background 0.23s ease;
    &:hover {
      background: var(--color-tertiary);
    }
  }
  @media only screen and (max-width: 55em) {
    h1 {
      font-size: 5.5rem;
    }
    span {
      width: 80%;
      font-size: 2.3rem;
    }
  }
`
export default function Header() {
  return (
    <StyledHeader>
      <h1>Headshots On The Go</h1>
      <span>
        On a mission to help every university student have a professional image!
      </span>

      <Link href="/headshots">Book Now</Link>
    </StyledHeader>
  )
}
