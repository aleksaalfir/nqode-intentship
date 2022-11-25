import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  document.title = 'Page not found';
  const navigate = useNavigate();
  return (
    <div className={classes['c-page-not-found']}>
      <h1 className={classes['c-page-not-found__title']}>404 Page not found</h1>
      <div className={classes['c-page-not-found__message']}>
        {`Sorry but we didn't found the page you was looking for :(`}
      </div>
      <div onClick={() => navigate(-1)} className={classes['c-page-not-found__go-back']}>
        Go to the previous page.
      </div>
      <div className={classes['c-page-not-found__mark']}>2022 &copy; nQode Internship</div>
    </div>
  );
};

export default NotFoundPage;
