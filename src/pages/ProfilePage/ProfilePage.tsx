import React, { useState, useEffect } from 'react';
import RentedBookCopyOverview from 'model/RentedBookCopyOverview';
import { getIdFromJwt } from 'services/authService';
import CurrentlyRentedBooks from 'components/Profile/CurrentlyRentedBooks/CurrentlyRentedBooks';
import classes from './ProfilePage.module.scss';
import RentHistory from 'components/Profile/RentHistory/RentHistory';
import UserAbout from 'components/Profile/UserAbout/UserAbout';
import axios from '../../axios/axiosConfig';
import { getUserRentedBooks } from 'services/api/rentService';

interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User>({} as User);
  const [currentlyRented, setCurrentlyRented] = useState<RentedBookCopyOverview[]>([]);
  const [rentHistory, setRentHistory] = useState<RentedBookCopyOverview[]>([]);

  const userId = getIdFromJwt();

  const getUser = () => {
    axios
      .get(`/user/${userId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getCurrentlyRentedBooks = () => {
    getUserRentedBooks(userId, 'true').then((data) => {
      setCurrentlyRented(data.content);
    });
  };

  const getRentHistory = () => {
    getUserRentedBooks(userId, 'false').then((data) => {
      setRentHistory(data.content);
    });
  };

  useEffect(() => {
    getUser();
    getCurrentlyRentedBooks();
    getRentHistory();
  }, []);

  return (
    <div className={classes['c-user-profile']}>
      <UserAbout
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        address={user.address}
        phoneNumber={user.phoneNumber}
      />
      <hr />
      <CurrentlyRentedBooks currentlyRentedBooks={currentlyRented} />
      <hr />
      <RentHistory rentHistory={rentHistory} />
    </div>
  );
};

export default ProfilePage;
