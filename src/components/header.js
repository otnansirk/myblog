import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-logo"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,        
      }}
    >
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className="header-menu">
        <span>
          <Link to="now">NOW</Link>
          <Link to="now">ABOUT</Link>
        </span>
      </div>
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
