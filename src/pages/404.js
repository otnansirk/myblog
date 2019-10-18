import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="content-wrapper">
      <div className="post-wrap">
        <h1>Error 404 - Page Not Found</h1>
      </div>
    </div>
    <center>
      <p>
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <Link to= "/" >Back Home</Link>
    </center>
  </Layout>
)

export default NotFoundPage
