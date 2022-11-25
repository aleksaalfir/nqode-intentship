import React from 'react';
import { NavLink } from 'react-router-dom';
import { getDecodedJwt, logout } from 'services/authService';
import classes from './Header.module.scss';
import { isAdministrator } from 'services/authService';

const Header = () => {
  const getUserLinks = () => {
    return (
      <>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            isActive
              ? `${classes['c-header__nav-link']} ${classes[`c-header__nav-link--active`]}`
              : classes['c-header__nav-link']
          }
        >
          Books
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? `${classes['c-header__nav-link']} ${classes[`c-header__nav-link--active`]}`
              : classes['c-header__nav-link']
          }
        >
          Profile
        </NavLink>
      </>
    );
  };

  const getAdminLinks = () => {
    return (
      <>
        <NavLink to={'/books'} className={classes['c-header__nav-link']}>
          Books
        </NavLink>
        <NavLink to={'/create-book'} className={classes['c-header__nav-link']}>
          Add book
        </NavLink>
        <NavLink to={'/profile'} className={classes['c-header__nav-link']}>
          Profile
        </NavLink>
        <NavLink to={'/rents'} className={classes['c-header__nav-link']}>
          Rents
        </NavLink>
        <NavLink to={'/manage-users'} className={classes['c-header__nav-link']}>
          Users
        </NavLink>
      </>
    );
  };

  return (
    <header className={classes['c-header']}>
      <div className={classes['c-header__logo']}>nQode</div>
      <nav className={classes['c-header__nav']}>
        <ul className={classes['c-header__nav-links']}>
          {isAdministrator() ? getAdminLinks() : getUserLinks()}
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
