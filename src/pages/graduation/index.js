import React from 'react';
import { graphql } from "gatsby";
import Hero from './Hero';

import { Helmet } from "react-helmet"
import GraduationImage from "./GraduationImage";
import "./styles.css";

export default function GraduationPage({ data }) {
  return (
    <div className="pricing-page">
      <Helmet>
        <title>Graduation Packages x JMayaPhoto | Headshots-on-the-Go</title>
        <meta name="title" content="Graduation Packages x JMayaPhoto | Headshots-on-the-Go" />
        <meta name="description" content="You might have taken graduation pictures in high school, but a session that highlights your college career will mean much more to you and your loved ones! Each package includes a free headshot to prepare you for your professional career!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://headshotgo.com/graduation" />
        <meta property="og:title" content="Graduation Packages x JMayaPhoto | Headshots-on-the-Go" />
        <meta property="og:description" content="You might have taken graduation pictures in high school, but a session that highlights your college career will mean much more to you and your loved ones! Each package includes a free headshot to prepare you for your professional career!" />
        <meta property="og:image" content="https://headshotgo.com/graduation-header.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://headshotgo.com/graduation" />
        <meta property="twitter:title" content="Graduation Packages x JMayaPhoto | Headshots-on-the-Go" />
        <meta property="twitter:description" content="You might have taken graduation pictures in high school, but a session that highlights your college career will mean much more to you and your loved ones! Each package includes a free headshot to prepare you for your professional career!" />
        <meta property="twitter:image" content="https://headshotgo.com/graduation-header.jpg"></meta>
        <meta property="twitter:image:alt" content="A compilation of graduation photographs from different happy clients"></meta>

      </Helmet>
      <header className="pricing-page-header">
        <Hero className="pricing-page-topInfo">
          <div className="topInfo--innerContainer">
            {/* <h1>Graduation & Senior Portraits</h1>
            <h2 className="topInfo--subtitle">A collaboration with <a className="AuthorLink-Grad" href={"https://www.tiktok.com/@jmayaphoto?lang=en"}>JMayaPhoto</a></h2> */}
            <div className="welcome-message-container">
              <h3 className="welcome-message-main">Los Àngeles & Southern California Graduation Portraits</h3>
              <h4 className="welcome-message-sub">Welcome Class of <strong>{new Date().getFullYear()}</strong></h4>
            </div>
          </div>
        </Hero>
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <div className="pricing-card_title">Basic Package</div>
              <div className="pricing-card_price">$200 <span className="pricing-card_price-hours">per hour</span></div>
            </div>
            <div className="pricing-card-body">
              <ul className="pricing-card-details">
                <li className="pricing-card-details_item">20 - 30 images</li>
                <li className="pricing-card-details_item">7 - 9 day delivery</li>
              </ul>
              <a className="pricing-card-button" href={data.site.siteMetadata.bookingLink}>Book Now</a>
            </div>
          </div>
          <div className="pricing-card pricing-card--large">
            <div className="pricing-card-header">
              <div className="pricing-card_title pricing-card_title--premium">Premium Package</div>
              <div className="pricing-card_price">$270 <span className="pricing-card_price-hours">per hour</span></div>
            </div>
            <div className="pricing-card-body">
              <ul className="pricing-card-details">
                <li className="pricing-card-details_item">25 - 35 images</li>
                <li className="pricing-card-details_item">5 - 7 day delivery</li>
                <li className="pricing-card-details_item">3 Free Headshots</li>
              </ul>
              <a className="pricing-card-button pricing-card-button--large" href={data.site.siteMetadata.bookingLink}>Book Now</a>
            </div>
          </div>
          <div className="pricing-card">
            <div className="pricing-card-header">
              <div className="pricing-card_title pricing-card_title--gold">Gold Package</div>
              <div className="pricing-card_price">$300 <span className="pricing-card_price-hours">per hour</span></div>
            </div>
            <div className="pricing-card-body">
              <ul className="pricing-card-details">
                <li className="pricing-card-details_item">25 - 35 images</li>
                <li className="pricing-card-details_item">3 - 7 day delivery</li>
                <li className="pricing-card-details_item">3 Creative Images</li>
                <li className="pricing-card-details_item">3 Free Headshots</li>
                <li className="pricing-card-details_item">Free Photoshop skin softening</li>
                <li className="pricing-card-details_item">Get featured on <a id="tiktok-link" href="https://www.tiktok.com/@jmayaphoto?lang=en">@Jmayaphoto</a></li>
                <a id="link-link" href="#pricing-information"><i># More Information</i></a>
              </ul>
              <a className="pricing-card-button" href={data.site.siteMetadata.bookingLink}>Book Now</a>
            </div>
          </div>
        </div>
      </header>
      <section className="PricingPageInformation">
        <div className="GraduationImages-Grid">
          <div className="Grid-Title">Class of 2021</div>
          <GraduationImage name="image1" className="image1" />
          <GraduationImage name="image2" className="image2" />
          <GraduationImage name="image3" className="image3" />
          <GraduationImage name="image4" className="image4 top" />
          <GraduationImage name="image5" className="image5" />
          <GraduationImage name="image6" className="image6" />
          <GraduationImage name="image7" className="image7" />
          <GraduationImage name="image8" className="image8" />
          <GraduationImage name="image9" className="image9 top" />
        </div>

        <div id="pricing-information" className="PricingInfo-Details">
          <p><strong><a href="https://www.instagram.com/headshotsonthego/">@jmayaphoto</a></strong> is the founder and CEO of Headshots on the Go, although headshots are his specialty, around this year he takes photos of graduating seniors to commemorate their college experiences. </p>
          <h2>Pricing Information</h2>
          {/* <div className="Package-Card Basic">
            <h3 className="Package-Title">Basic Package</h3>
            <ul className="Package-Details">
              <li className="Package-Item">*Prices are reduced to <strong>$335/person</strong> for a group of 2*</li>
              <li className="Package-Item">*Prices are reduced to <strong>$320/person</strong> for a group of 3*</li>
              <li className="Package-Item">*Prices are reduced to <strong>$305/person</strong> for a group of 4*</li>
              <li className="Package-Item">Travel fee NOT INCLUDED</li>
            </ul>
          </div>
          <div className="Package-Card Premium">
            <h3 className="Package-Title">Premium Package</h3>
            <ul className="Package-Details">
              <li className="Package-Item">*Prices are reduced to <strong>$430/person</strong> for a group of <strong>2</strong>*</li>
              <li className="Package-Item">*Prices are reduced to <strong>$410/person</strong> for a group of <strong>3</strong>*</li>
              <li className="Package-Item">*Prices are reduced to <strong>$390/person</strong> for a group of <strong>4</strong>*</li>
              <li className="Package-Item">Travel fee NOT INCLUDED</li>
            </ul>
          </div> */}
          <div className="Package-Card Gold">
            <h3 className="Package-Title">Gold Package</h3>
            <ul className="Package-Details">
              <li className="Package-Item">Add <u>confetti</u>, <u>bubbles</u>, or <u>prop of your choice</u> for a fun twist</li>
              <li className="Package-Item"> TikTok <a id="tiktok-link" href="https://www.tiktok.com/@jmayaphoto?lang=en">@Jmayaphoto</a> (<strong>105K+</strong> Likes, <strong>6.1k+</strong> Followers)</li>
              <li className="Package-Item">Travel fee NOT INCLUDED</li>
            </ul>
          </div>
          <a className="pricing-card-button" role="button" href={data.site.siteMetadata.bookingLink}>Book Now</a>
        </div>
      </section>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        bookingLink
      }
    }
  }
`;