import React from "react"

import "./Footer.css"

const Footer = ({ sections }) => (
  <footer className="footer">
    <nav>
      <ul className="footer__nav-list">
        {sections.map((_, i) => (
          <li className="footer__nav-item" key={i}>
            {i}
          </li>
        ))}
      </ul>
    </nav>
  </footer>
)

Footer.defaultProps = {
  sections: new Array(8).fill(undefined)
}

export default Footer
