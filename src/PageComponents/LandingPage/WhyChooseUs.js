import styled from "styled-components"

export const WhyChooseUs = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 5rem;
  align-items: center;
  padding: 10rem 2rem;

  background: #fdfdff;
  border-radius: 1rem;
  box-shadow: 0 0 2rem 0.4rem var(--color-quaternary);

  width: min(150rem, 95vw);
  margin: 1rem auto 10rem;

  .Item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .ItemTitle {
      font-size: clamp(3.1rem, 2vw, 3.6rem);
      margin-bottom: 2rem;
      -webkit-background-clip: text;
      color: transparent;
    }

    .ItemIcon {
      width: min(12rem, 20vw);
      height: min(20rem, 25vw);
      margin-bottom: 2rem;
    }

    .ItemDescription {
      font-size: 1.6rem;
      padding: 1rem 1.3rem;
    }

    &:nth-child(1) {
      .ItemTitle {
        background-image: linear-gradient(135deg, #2c73d2, #845ec2 50%);
      }
    }
    &:nth-child(2) {
      .ItemTitle {
        background-image: linear-gradient(45deg, #845ec2, #ff6f91);
      }
    }
    &:nth-child(3) {
      .ItemTitle {
        background-image: linear-gradient(135deg, #ff6f91, #ffc75f);
      }
    }

    @media only screen and (max-width: 50em) {
      grid-column-gap: 0;
      .ItemTitle {
        font-size: 5.4rem;
      }

      .ItemDescription {
        font-size: 2rem;
        width: 85%;
        line-height: 1.7;
      }
      &:nth-child(1) {
        .ItemTitle {
          background-image: linear-gradient(
            to bottom,
            #2c73d2 15%,
            #845ec2 85%
          );
        }
      }
      &:nth-child(2) {
        .ItemTitle {
          background-image: linear-gradient(to bottom, #845ec2 35%, #ff6f91);
        }
      }
      &:nth-child(3) {
        .ItemTitle {
          background-image: linear-gradient(to bottom, #ff6f91 35%, #ffc75f);
        }
      }
    }
  }

  @media only screen and (max-width: 50em) {
    grid-template-columns: 1fr;
    grid-row-gap: 10rem;
  }
`
