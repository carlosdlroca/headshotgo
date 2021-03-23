import React from 'react';
import { Helmet} from 'react-helmet';
import Hero from "./Hero";
import Gallery from "../../components/Gallery"

import { graphql } from 'gatsby';
import TimesSvg from "./times-solid.svg";
import "./styles.css"

export default function HeadshotsPage({data}) {
  return (
  <div className="hs-page">
      <Helmet>
        <title>Headshot Packages x JMayaPhoto</title>
        <meta name="title" content="Headshot Packages x JMayaPhoto" />
        <meta name="description" content="You might have taken graduation pictures in high school, but a session that highlights your college career will mean much more to you and your loved ones! Each package includes a free headshot to prepare you for your professional career!"/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://headshotgo.com/headshots" />
        <meta property="og:title" content="Headshot Packages x JMayaPhoto" />
        <meta property="og:description" content="You might have taken graduation pictures in high school, but a session that highlights your college career will mean much more to you and your loved ones! Each package includes a free headshot to prepare you for your professional career!"/>
        <meta property="og:image" content="https://headshotgo.com/header-image.jpg"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://headshotgo.com/headshots"/>
        <meta property="twitter:title" content="Headshot Packages x JMayaPhoto"/>
        <meta property="twitter:description" content="You might have taken graduation pictures in high school, but a session that highlights your college career will mean much more to you and your loved ones! Each package includes a free headshot to prepare you for your professional career!"/>
        <meta property="twitter:image" content="https://headshotgo.com/header-image.jpg"></meta>
      </Helmet>
      <header className="hs-page-header">
        <Hero className="hs-page-topInfo">
          <div className="topInfo--innerContainer">
            <h1>Headshots <TimesSvg className="times-svg" /> <a className="AuthorLink-HS" href={"https://www.tiktok.com/@jmayaphoto?lang=en"}>JMayaPhoto</a></h1>
          </div>
        </Hero>
        <div className="hs-cards">
          <div className="hs-card green">
            <div className="hs-card-header">
              <div className="hs-card_title">Most Affordable Package</div>
              <div className="hs-card_price">$55 <span className="hs-card_price-hours"></span></div>
            </div>
            <div className="hs-card-body">
              <ul className="hs-card-details">
                <li className="hs-card-details_item">10 - 15 guaranteed images</li>
                <li className="hs-card-details_item">20 minute photoshoot</li>
                <li className="hs-card-details_item">2 - 3 day delivery</li>
                <a href="#pricing-information"><i># Pricing Information</i></a>
              </ul>
              <a className="hs-card-button" href={data.site.siteMetadata.bookingLink}>Buy Package</a>
            </div>
          </div>
          <div className="hs-card hs-card--large purple">
            <div className="hs-card-header">
              <div className="hs-card_title">Most Popular Package</div>
              <div className="hs-card_price">$75 <span className="hs-card_price-hours"></span></div>
            </div>
            <div className="hs-card-body">
              <ul className="hs-card-details">
                <li className="hs-card-details_item">10 - 15 images</li>
                <li className="hs-card-details_item">30 minute photoshoot</li>
                <li className="hs-card-details_item">2 - 3 day delivery</li>
                <li className="hs-card-details_item"><strong>Free Photoshop Retouch</strong></li>
                <a href="#pricing-information"><i># Pricing Information</i></a>
              </ul>
              <a className="hs-card-button hs-card-button--large" href={data.site.siteMetadata.bookingLink}>Buy Package</a>
            </div>
          </div>
          <div className="hs-card blue">
            <div className="hs-card-header">
              <div className="hs-card_title">Fastest Delivery Package</div>
              <div className="hs-card_price">$85 <span className="hs-card_price-hours"></span></div>
            </div>
            <div className="hs-card-body">
              <ul className="hs-card-details">
                <li className="hs-card-details_item">10 - 15 images</li>
                <li className="hs-card-details_item">30 minute photoshoot</li>
                <li className="hs-card-details_item">1 business day delivery</li>
                <li className="hs-card-details_item"><strong>Free Photoshop Retouch</strong></li>
                <a href="#pricing-information"><i># Pricing Information</i></a>
              </ul>
              <a className="hs-card-button" href={data.site.siteMetadata.bookingLink}>Buy Package</a>
            </div>
          </div>
        </div>
      </header>
      <section className="PricingPageInformation">
        <Gallery />
        <div id="pricing-information" className="PricingInfo-Details">
          <h2>Pricing Information</h2>
          <div className="Package-Card Basic">
            <h3 className="Package-Title">Location Prices</h3>
            <ul className="Package-Details">
              <li className="Package-Item">If the location is <strong>1-5 miles</strong> from Mid City, Los Angeles then you will <strong>NOT</strong> be charged a transportation fee.</li>
              <li className="Package-Item">
                If the location is <strong>6-10 miles</strong> from Mid City, Los Angeles then you will be charged <strong>$0.50/mile</strong> <br/>
                <span>*bring 1 friend to the shoot to opt out of this fee</span>
              </li>
              <li className="Package-Item">
                If the location is <strong>11-30 miles</strong> from Mid City, Los Angeles then you will be charged <strong>$0.75/mile</strong> <br/>
                <span>*bring 2 friends to the shoot to opt out of this fee</span>
              </li>
              <li className="Package-Item">
                If the location is <strong>31-50 miles</strong> from Mid City, Los Angeles then you will be charged <strong>$1.00/mile</strong> <br/>
                <span>*bring 3+ friends to the shoot to opt out of this fee</span>
              </li>
            </ul>
          </div>
          <a className="pricing-card-button" role="button" href={data.site.siteMetadata.bookingLink}>Book Now</a>
        </div>
      </section>
    </div>
  );
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