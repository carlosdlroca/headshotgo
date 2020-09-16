import React from "react"
import { graphql } from "gatsby"
import FullWidth from "../components/FullWidth"
import SEO from "../components/seo"
import PageTitle from "../components/Pages/PageTitle"
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

const TeamMembers = styled.div``

const TeamMemberContainer = styled(FullWidth)`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  padding: 2rem 5vw;
  --clip1: 14%;
  --clip2: calc(100% - var(--clip1));
  .TeamMemberImage {
    width: 85%;
    svg {
      height: 80%;
      width: 80%;
    }
  }

  .TeamMemberInformation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    line-height: 1.7;
    .Name {
      font-size: clamp(3rem, 3vw, 3.1rem);
      color: var(--color-primary);
      text-decoration: underline;
    }

    .Description {
      font-size: 1.5rem;
      color: var(--color-text-light);
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
    background: none;
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
    clip-path: polygon(0 0, 100% var(--clip1), 100% var(--clip2), 0 100%);
  }

  &:first-child {
    padding-bottom: 10rem;
    clip-path: polygon(0 0, 100% 0, 100% var(--clip2), 0 100%);
  }

  &:last-child {
    padding-top: 10rem;
    clip-path: polygon(0 0, 100% var(--clip1), 100% 100%, 0 100%);
  }

  @media only screen and (max-width: 52.4em) {
    &&& {
      grid-template-columns: 1fr;
      grid-template-rows: 0.8fr 1fr;
      clip-path: unset;
      padding: 2rem 2vw;
      .TeamMemberImage {
        grid-column: 1 / -1;
        grid-row: 1 / 2;
        width: 50%;
        margin: 0 auto;
      }

      .TeamMemberInformation {
        grid-column: 1 / -1;
        grid-row: 2 / 3;
        font-size: 2rem;
        .Name {
          /* font-size: 4rem; */
        }
      }
    }
  }
`

function renderIcon(linkType) {
  switch (linkType) {
    case "twitter":
      return <TwitterSvg />
    case "instagram":
      return <InstagramSvg />
    case "linkedin":
      return <LinkedInSvg />
    case "facebook":
      return <FacebookSvg />
    case "youtube":
      return <YoutubeSvg />
    case "email":
      return <EmailSvg />
    default:
      return null
  }
}

function renderTeamMembers(data) {
  console.table(data)
  return data.allTeamsJson.edges.map(
    ({ node: { memberName, memberTitle, memberDescription, memberLinks } }) => (
      <TeamMemberContainer key={memberName}>
        <div className="TeamMemberImage"></div>
        <section className="TeamMemberInformation">
          <h1 className="Name">{memberName}</h1>
          <h2 className="Title">{memberTitle}</h2>
          <p className="Description">{memberDescription}</p>
          <ul className="Links">
            {memberLinks &&
              memberLinks.length > 0 &&
              memberLinks.map(({ linkType, linkUrl }) => (
                <li className="Link" key={linkUrl}>
                  <a href={linkUrl}>{renderIcon(linkType)}</a>
                </li>
              ))}
          </ul>
        </section>
      </TeamMemberContainer>
    )
  )
}

export default function OurTeam({ data }) {
  return (
    <>
      <SEO title="Our Team" />
      <PageTitle>Meet Our Team</PageTitle>
      <TeamMembers>{renderTeamMembers(data)}</TeamMembers>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allTeamsJson {
      edges {
        node {
          memberName
          memberTitle
          memberDescription
          memberLinks {
            linkType
            linkUrl
          }
        }
      }
    }
  }
`
