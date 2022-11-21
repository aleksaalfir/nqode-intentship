import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getDecodedJwt, logout } from 'services/authService';
import { getAllowedNavbarLinks } from 'services/navBarService';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes['c-header']}>
      <div className={classes['c-header__logo']}>nQode</div>
      <nav className={classes['c-header__nav']}>
        <ul className={classes['c-header__nav-links']}>
          {getAllowedNavbarLinks().map((link, index) => {
            return (
              <NavLink to={link.url} key={index} className={classes['c-header__nav-link']}>
                {link.text}
              </NavLink>
            );
          })}
          {getDecodedJwt() ? (
            <li className={classes['c-header__nav-link']} onClick={() => logout()}>
              Log out
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
