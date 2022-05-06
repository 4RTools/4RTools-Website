import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `4RTools`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-YW4MC7XMVM"
    }
  }, "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap"]
};

export default config;
