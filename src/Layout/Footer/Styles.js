import styled from "styled-components"

export const FooterContainer = styled.footer`
  background-color: #312e81;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23312e81' cx='50' cy='0' r='50'/%3E%3Cg fill='%23323287' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%2333368c' cx='50' cy='100' r='50'/%3E%3Cg fill='%23343a92' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23353e97' cx='50' cy='200' r='50'/%3E%3Cg fill='%2336429d' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%233746a3' cx='50' cy='300' r='50'/%3E%3Cg fill='%23384aa8' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23384fae' cx='50' cy='400' r='50'/%3E%3Cg fill='%233953b4' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%233a57ba' cx='50' cy='500' r='50'/%3E%3Cg fill='%233a5bc0' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%233a5fc6' cx='50' cy='600' r='50'/%3E%3Cg fill='%233b64cc' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%233b68d1' cx='50' cy='700' r='50'/%3E%3Cg fill='%233b6cd8' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%233b71de' cx='50' cy='800' r='50'/%3E%3Cg fill='%233b75e4' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%233b79ea' cx='50' cy='900' r='50'/%3E%3Cg fill='%233b7ef0' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%233b82f6' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;
  padding: 10rem 5rem 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  grid-gap: 4rem;
  font-size: 1.6rem;

  color: white;

  .Schedule {
    display: grid;
    place-items: space-between;
    justify-self: center;
    u {
      font-size: 1.51em;
    }
  }

  #socialmedia {
    display: grid;
    grid-template-columns: repeat(4, 6rem);
    grid-template-rows: auto 1fr;
    margin: 3rem 0;
    justify-self: center;
    h2 {
      grid-column: 1 / -1;
      font-size: 1.8rem;
    }
    li {
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }

    svg,
    svg path {
      fill: white;

      &:hover,
      &:focus {
        fill: var(--color-quaternary);
      }
    }
  }

  @media only screen and (max-width: 65.63em) {
    grid-template-columns: 1fr;
    place-items: center;
    padding: 3rem 1rem;
    .Schedule {
      letter-spacing: 0.2rem;
      u {
        letter-spacing: 0.35rem;
      }
    }
    #socialmedia {
      justify-self: unset;

      grid-template-columns: repeat(5, 6rem);
      column-gap: clamp(2.5rem, 2vw, 5rem);
    }
  }
`
export const Copyright = styled.span`
  margin-top: 4rem;
  font-size: 1.2rem;
  line-height: 1.7;
`
