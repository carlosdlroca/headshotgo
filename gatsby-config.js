module.exports = {
  siteMetadata: {
    title: `Headshots-on-the-Go`,
    description: `Helping young professionals accelerate their career by making sure they give the best first impression. Update your headshot profile picture today!`,
    author: `@mayafilmz`,
    email: "mayafilmsphotovideo@gmail.com",
    bookingLink: "https://square.site/book/PXQFBMDDJM5AJ/headshot-on-the-go",
    phone: "tel:+13234916109",
    links: [
      {
        linkType: "instagram",
        linkUrl: "https://www.instagram.com/headshotsonthego/",
      },
      {
        linkType: "linkedin",
        linkUrl: "https://www.linkedin.com/company/maya-films",
      },
      {
        linkType: "email",
        linkUrl: "mailto:mayafilmsphotovideo@gmail.com",
      },
      {
        linkType: "facebook",
        linkUrl: "https://facebook.com/HeadshotsontheGo",
      },
      {
        linkType: "phone",
        linkUrl: "tel:+13234916109",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Headshot Go`,
        short_name: `HeadshotGo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/HeadshotsOnTheGo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
