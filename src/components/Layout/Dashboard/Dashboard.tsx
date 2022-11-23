import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from './Dashboard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faPlus,
  faUser,
  faUsers,
  faChartSimple,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import DashboardLink from './DashboardLink';
import { logout } from 'services/authService';

const Dashboard = () => {
  return (
    <div className={classes['c-dashboard']}>
      <div className={classes['c-dashboard__section']}>
        <div className={classes['c-dashboard__section-main']}>
          <DashboardLink icon={faBook} text={'Books'} url={'/dashboard/books'} />
          <DashboardLink icon={faPlus} text={'Add book'} url={'/dashboard/create-book'} />
          <DashboardLink icon={faChartSimple} text={'Rents'} url={'/dashboard/rents'} />
          <DashboardLink icon={faUsers} text={'Users'} url={'/dashboard/manage-users'} />
        </div>
        <div className={classes['c-dashboard__section-secondary']}>
          <DashboardLink icon={faUser} text={'Profile'} url={'/dashboard/profile'} />
          <li className={classes['c-dashboard__nav-link']} onClick={() => logout()}>
            <FontAwesomeIcon icon={faRightFromBracket} className={classes['c-dashboard__icon']} />
            Log out
          </li>
        </div>
      </div>
      <div className={classes['c-dashboard__content']}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
