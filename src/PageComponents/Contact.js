import styled from "styled-components"

export const ContactPageContainer = styled.div`
  display: grid;
  place-items: center;
  padding: 0 0 5rem;
  overflow-x: hidden;
`
export const ContactInfo = styled.section`
  background: white;
  font-size: 3.2rem;
  color: var(--color-black-2);
  padding: 1.4rem;
  width: min(85vw, 120rem);
  border-radius: .8rem;
  margin-top: 10rem;
  box-shadow: .6rem .6rem ${({color}) => color? color: "var(--color-primary)"};

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.7;
    font-size: 2.5rem;
    color: var(--color-black-3);

    ul {
      margin-left: 10rem;
      list-style: square;
    }
  }

`
