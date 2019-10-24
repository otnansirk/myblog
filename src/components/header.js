import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import ImgLogo from './image'

const Header = ({ siteTitle }) => (
  <header>
    <Helmet>
      <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=5db22e51990aa2001296aa78&product=sticky-share-buttons' async='async'></script>
    </Helmet>
    <div className="header-logo"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,        
      }}
    >
      <h1 onClick="window.location.reload();">
        <Link to="/">
          <ImgLogo>
          </ImgLogo>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
