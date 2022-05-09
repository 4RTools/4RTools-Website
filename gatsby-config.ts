import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `4RTools - Official Website`,
    siteUrl: `https://www.4rtools.com.br`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-top-layout",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@pages": path.resolve(__dirname, "src/pages"),
          "@theme": path.resolve(__dirname, "src/theme"),
          "@sections": path.resolve(__dirname, "src/sections"),
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `4rtools`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f47635`,
        theme_color: `#f47635`,
        display: `minimal-ui`,
        icon: `src/images/logo-4rtools.png`, // This path is relative to the root of the site.
      },
    },
    {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-YW4MC7XMVM"
    }
  }, "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap"]
};

export default config;
