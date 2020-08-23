module.exports = {
  siteMetadata: {
    title: `Headshot on the Go`,
    description: `A mobile photography service that specializes in headshot photography services for undergraduate, graduate students, and young professionals.`,
    author: `@mayafilmz`,
    email: "mayafilmsphotovideo@gmail.com",
    bookingLink: "https://square.site/book/PXQFBMDDJM5AJ/headshot-on-the-go",
  },
  plugins: [
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
