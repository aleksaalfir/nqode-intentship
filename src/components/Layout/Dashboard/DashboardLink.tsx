import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dashboard.module.scss';

interface DashboardLinkProps {
  icon: IconDefinition;
  text: string;
  url: string;
}

const DashboardLink: React.FC<DashboardLinkProps> = ({ icon, text, url }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive
          ? `${classes['c-dashboard__nav-link']} ${classes[`c-dashboard__nav-link--active`]}`
          : classes['c-dashboard__nav-link']
      }
    >
      <FontAwesomeIcon icon={icon} className={classes['c-dashboard__icon']} />
      {text}
    </NavLink>
  );
};

export default DashboardLink;
