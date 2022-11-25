import React from 'react';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import classes from './UserAbout.module.scss';
import DetailText from 'components/core/DetailText/DetailText';

interface UserAboutProps {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;
}

const UserAbout: React.FC<UserAboutProps> = ({
  firstName,
  lastName,
  email,
  address,
  phoneNumber
}) => {
  return (
    <div className={classes['c-user-profile-about']}>
      <h1 className={classes['c-user-profile-about__title']}>Welcome to your profile</h1>
      <DetailText text={`${firstName} ${lastName}`} />
      <DetailText text={email} icon={faEnvelope} />
      <DetailText text={phoneNumber} icon={faPhone} />
      <DetailText text={address} icon={faLocationDot} />
    </div>
  );
};

export default UserAbout;
