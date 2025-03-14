import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Hero({ children, className }) {

  return (
    <div style={{ display: "grid" }} className={className}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <img
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        // You can optionally force an aspect ratio for the generated image
        // aspectRatio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {children}
      </div>
    </div>
  );
}