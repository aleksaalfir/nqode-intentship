import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import classes from './StandardLayout.module.scss';

interface StandardLayoutProps {
  children: JSX.Element;
}

const StandardLayout: React.FC<StandardLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={classes['c-standard-layout']}>{children}</div>
      <Footer />
    </>
  );
};

export default StandardLayout;
