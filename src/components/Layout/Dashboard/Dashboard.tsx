import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import classes from './Dashboard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faPlus,
  faUser,
  faUsers,
  faChartSimple,
  faRightFromBracket,
  faArrowRight,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import DashboardLink from './DashboardLink';
import { logout } from 'services/authService';

const Dashboard = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [toggleSections, setToggleSections] = useState(true);
  useEffect(() => {
    if (pathname === '/dashboard' || pathname === '/dashboard/') {
      navigate('/dashboard/books');
    }
  }, [pathname, navigate]);

  return (
    <div className={classes['c-dashboard']}>
      {toggleSections ? (
        <div className={classes['c-dashboard__section']}>
          <div className={classes['c-dashboard__main-links']}>
            <div className={classes['c-dashboard__section-arrow']}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                onClick={() => setToggleSections(!toggleSections)}
              />
            </div>
            <DashboardLink icon={faBook} text={'Books'} url={'/dashboard/books'} />
            <DashboardLink icon={faPlus} text={'Add book'} url={'/dashboard/create-book'} />
            <DashboardLink icon={faChartSimple} text={'Rents'} url={'/dashboard/rents'} />
            <DashboardLink icon={faUsers} text={'Users'} url={'/dashboard/manage-users'} />
          </div>
          <div className={classes['c-dashboard__secondary-links']}>
            <DashboardLink icon={faUser} text={'Profile'} url={'/dashboard/profile'} />
            <li className={classes['c-dashboard__nav-link']} onClick={() => logout()}>
              <FontAwesomeIcon icon={faRightFromBracket} className={classes['c-dashboard__icon']} />
              Log out
            </li>
          </div>
        </div>
      ) : (
        <div
          className={`${classes['c-dashboard__section']} ${classes['c-dashboard__section--closed']}`}
        >
          <div className={classes['c-dashboard__main-links']}>
            <div className={classes['c-dashboard__section-arrow']}>
              <FontAwesomeIcon
                icon={faArrowRight}
                onClick={() => setToggleSections(!toggleSections)}
              />
            </div>
            <DashboardLink icon={faBook} url={'/dashboard/books'} />
            <DashboardLink icon={faPlus} url={'/dashboard/create-book'} />
            <DashboardLink icon={faChartSimple} url={'/dashboard/rents'} />
            <DashboardLink icon={faUsers} url={'/dashboard/manage-users'} />
          </div>
          <div className={classes['c-dashboard__secondary-links']}>
            <DashboardLink icon={faUser} url={'/dashboard/profile'} />
            <li className={classes['c-dashboard__nav-link']} onClick={() => logout()}>
              <FontAwesomeIcon icon={faRightFromBracket} className={classes['c-dashboard__icon']} />
            </li>
          </div>
        </div>
      )}
      <div className={classes['c-dashboard__content']}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
