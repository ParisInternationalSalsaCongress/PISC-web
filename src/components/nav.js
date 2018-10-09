import React from 'react';
import { Link } from 'gatsby';

const Nav = ({children, className, ...navAttributes}) => (
  <nav className={className} {...navAttributes}>
    {children}
  </nav>
)

export default Nav;