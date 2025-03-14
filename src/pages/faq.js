import React from "react"
// import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
`

const FAQTitle = styled.h1`
  font-size: clamp(4.5rem, 3vw, 5.5rem);
  color: var(--color-primary);
  text-align: center;
`

const FAQGrid = styled.section`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 10rem;
  color: var(--text-white-1);
  width: min(110rem, 95vw);
  margin: 1rem auto 15rem;

  .Question {
    font-size: clamp(3rem, 1.5vw, 3.8rem);
  }

  .Answer {
    font-size: clamp(2rem, 1.2vw, 2.8rem);
    line-height: 1.7;
    span {
      display: block;
      margin-bottom: 2rem;
    }

    .Info {
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 54em) {
    grid-row-gap: 0;
    grid-template-columns: 1fr;

    .Question {
      margin-bottom: 1rem;
      display: inline-block;
      background: var(--color-primary);
      color: white;
      text-align: center;
    }
    .Answer {
      margin-bottom: 10rem;
    }
  }
`

export default function faq() {
  return (
    <Wrapper>
      <SEO title="FAQ" />
      <FAQTitle>Frequently asked questions</FAQTitle>
      <FAQGrid>
        <h1 className="Question">
          How have your sessions changed during COVID?
        </h1>
        <p className="Answer">
          During the pandemic, our team takes proper measures to ensure a great
          socially distanced photo session. Our photographer wears a mask for
          the entire photo session, and makes sure that their equipment is clean
          before starting the session, and after finishing the session.
        </p>

        <h1 className="Question">How can I book my appointment?</h1>
        <p className="Answer">
          <span>
            You need to first contact us, you can do this through several
            different ways: DM us on instagram (@headshotsonthego), by filling
            out our contact page on our website, or by giving us a call :)
          </span>
          <span>
            We will then send you our booking link for our availability
          </span>
          <span>
            After you have booked with us, we will send you the next steps via
            email.
          </span>
        </p>

        <h1 className="Question">How do I receive my photos?</h1>
        <p className="Answer">
          <span>
            You will receive your images through an email titled “[Name], Your
            photos are ready!”
          </span>
          <span>
            This email will include a google drive folder that will contain all
            your images
          </span>
          <span className="Info">
            *This procedure is tentative as we are constantly looking for ways
            to update our efficiency
          </span>
        </p>

        <h1 className="Question">
          I do not go to UCLA, can I still make an appointment?
        </h1>
        <p className="Answer">
          Absolutely, the majority of students we help go to UCLA. This is
          because we are current UCLA students. However, our goal is to help all
          college students in LA County have a professional image.
        </p>

        <h1 className="Question">Do you own a studio?</h1>
        <p className="Answer">
          We do not own a studio. Since our main business philosophy is being
          mobile, not owning a studio allows us to help out more students
          because we do not have a physical location.
        </p>

        <h1 className="Question">Why are you only open during the weekend? </h1>
        <p className="Answer">
          We believe in quality over quantity. Our 2 person team consists of
          current university students(UCLA & SMC). As students, education is
          always first. We want to make sure we devote enough time for our
          classes during the week so we can devote enough time for our sessions
          every weekend.
        </p>

        <h1 className="Question">
          How can I support your business and stay in touch?
        </h1>
        <p className="Answer">
          You can support us by tagging us on social media, and spreading the
          word about our service by telling your family, your friends, your
          peers, and anyone else you know that does not have a professional
          image. You can find us on Facebook, Instagram and LinkedIn.
        </p>
      </FAQGrid>
    </Wrapper>
  )
}
