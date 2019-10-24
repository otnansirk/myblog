import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ImgLogo from './image'

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
