import React from "react"
import FullWidth from "../components/FullWidth"
import styled from "styled-components"

import TwitterSvg from "../images/socialmedia/twitter.svg"
import InstagramSvg from "../images/socialmedia/instagram.svg"
import LinkedInSvg from "../images/socialmedia/linkedin.svg"
import FacebookSvg from "../images/socialmedia/facebook.svg"
import YoutubeSvg from "../images/socialmedia/youtube.svg"
import EmailSvg from "../images/socialmedia/email.svg"

import Peep1 from "../images/peeps/peep-54.svg"
import Peep2 from "../images/peeps/peep-15.svg"
import Peep3 from "../images/peeps/peep-46.svg"

import SEO from "../components/seo"

const TeamMembers = styled.div``

const TeamMemberContainer = styled(FullWidth)`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  padding-left: 12vw;
  padding-right: 12vw;

  .TeamMemberImage {
    svg {
      height: 80%;
      width: 80%;
    }
  }

  .TeamMemberInformation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 100%;
    line-height: 1.7;
    .Name {
      text-decoration: underline;
    }

    .Description {
      font-size: 1.4rem;
    }

    .Links {
      display: flex;

      .Link {
        svg,
        svg path {
          fill: var(--color-primary);
        }
      }
    }
  }

  &:nth-of-type(2n) {
    grid-template-columns: 1fr 0.5fr;
    background-color: white;
    .TeamMemberImage {
      grid-column: 2 / span 1;
    }
    .TeamMemberInformation {
      grid-row: 1 / 2;
      grid-column: 1 / span 1;
    }
  }

  &:nth-of-type(2n + 1) {
    padding-top: 10rem;
    padding-bottom: 10rem;
    clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);
  }

  &:first-child {
    padding-bottom: 10rem;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }

  &:last-child {
    padding-top: 10rem;
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
  }

  @media only screen and (max-width: 47.25em) {
    &&& {
      grid-template-columns: 1fr;
      grid-template-rows: 0.6fr 1fr;

      .TeamMemberImage {
        grid-column: 1 / -1;
        grid-row: 1 / span 1;
      }

      .TeamMemberInformation {
        grid-row: 2 / -1;
      }
    }
  }
`

export default function OurTeam() {
  return (
    <>
      <SEO title="Our Team" />
      <h2
        style={{
          textAlign: "center",
          fontSize: "3.4rem",
          margin: "3rem 0 5rem",
          color: "var(--color-primary",
        }}
      >
        Meet Our Team
      </h2>
      <TeamMembers>
        <TeamMemberContainer>
          <div className="TeamMemberImage">
            <Peep1 />
          </div>
          <section className="TeamMemberInformation">
            <h1 className="Name">Juan Maya Hernandez</h1>
            <h2 className="Description">
              Juan Maya Hernandez is a 20 year old entrepreneur, content
              creator, and photographer. As a current undergraduate student at
              UCLA, he is pursuing a Bachelor's of Science in Atmospheric &
              Oceanic Sciences/Mathematics. Hindered by his citizenship status,
              he has created opportunities for himself through his networking
              capabilities and his desire to learn. His status, his family, and
              friends motivate Juan to continue to pursue his goals and
              aspirations. He hopes to one day make a larger impact on his
              family and the undocumented community by becoming the first
              millionaire in his family.
            </h2>
            <ul className="Links">
              <li className="Link" aria-label="Twitter">
                <a href="https://twitter.com/mayafilmz">
                  <TwitterSvg />
                </a>
              </li>
              <li className="Link" aria-label="Instagram">
                <a href="https://www.instagram.com/mayafilmz/">
                  <InstagramSvg />
                </a>
              </li>
              <li className="Link" aria-label="Linked In">
                <a href="https://www.linkedin.com/in/juan-maya-hernandez-075aa316b/">
                  <LinkedInSvg />
                </a>
              </li>
              <li className="Link" aria-label="Facebook">
                <a href="https://www.facebook.com/MayaFilmz/">
                  <FacebookSvg />
                </a>
              </li>
              <li className="Link" aria-label="Youtube">
                <a href="https://www.youtube.com/channel/UCOKvLVp6g2ID4pGJQgegc4A?view_as=subscriber/">
                  <YoutubeSvg />
                </a>
              </li>
              <li className="Link" aria-label="Email">
                <a href="mailto:mayafilmsphotovideo@gmail.com">
                  <EmailSvg />
                </a>
              </li>
            </ul>
          </section>
        </TeamMemberContainer>
        <TeamMemberContainer>
          <div className="TeamMemberImage">
            <Peep2 />
          </div>
          <section className="TeamMemberInformation">
            <h1 className="Name">Damaris Esquivel</h1>
            <h2 className="Description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              consequuntur, eum blanditiis ad possimus eius et accusantium omnis
              suscipit qui earum culpa quo aspernatur nobis illo quasi in iure!
              Magnam.
            </h2>
            <ul className="Links"></ul>
          </section>
        </TeamMemberContainer>
        <TeamMemberContainer>
          <div className="TeamMemberImage">
            <Peep3 />
          </div>
          <section className="TeamMemberInformation">
            <h1 className="Name">Carlos De La Roca</h1>
            <h2 className="Description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              consequuntur, eum blanditiis ad possimus eius et accusantium omnis
              suscipit qui earum culpa quo aspernatur nobis illo quasi in iure!
              Magnam.
            </h2>
            <ul className="Links"></ul>
          </section>
        </TeamMemberContainer>
      </TeamMembers>
    </>
  )
}
