import React from 'react';
import { Link } from 'react-router-dom';
import authService from 'services/authService';
import navBarService from 'services/navBarService';
import classes from './Header.module.scss';

const Header = () => {
  const { getAllowedNavbarLinks } = navBarService;
  const { getDecodedJwt, logout } = authService;

  return (
    <header className={classes['c-header']}>
      <div className={classes['c-header__logo']}>nQode</div>
      <nav className={classes['c-header__nav']}>
        <ul className={classes['c-header__nav-links']}>
          {getAllowedNavbarLinks().map((link, index) => {
            return (
              <Link to={link.url} key={index} className={classes['c-header__nav-link']}>
                {link.text}
              </Link>
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
