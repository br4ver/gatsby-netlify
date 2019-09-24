/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "gofer-Gatsby",
    description: "This is a sample",
    keywords: "gofer, gofer 2019, gofergatsby",
    image: '/static/image.jpg',
    url: 'https://www.gatsbyjs.org/'
  },
plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
   { resolve: `gatsby-transformer-remark`},
   { resolve: `gatsby-source-wordpress`,
     options: {
        baseUrl: `thatsnewblog.wordpress.com`,
        protocol:`http`,
        hostingWPCOM: true,
     },
    },
    `gatsby-plugin-react-helmet`
  ],
}


