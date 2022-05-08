import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

export default function TopLayout(props: any) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/qa/foundation/typefaces/globotipo.css"
          rel="stylesheet"
        />
      </Helmet>
        {props.children}
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
