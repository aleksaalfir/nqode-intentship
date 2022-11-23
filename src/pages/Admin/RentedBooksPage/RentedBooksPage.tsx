import React, { useEffect, useState } from 'react';
import RentedBookCard from 'components/Profile/RentedBookCard/RentedBookCard';
import RentedBookCopyOverview from 'model/RentedBookCopyOverview';
import classes from './RentedBooksPage.module.scss';
import NotReturnedRentedBooks from '../../../components/RentedBook/NotReturnedRentedBooks/NotReturnedRentedBooks';
import { getAllNotReturnedRentedBooks, cancelRent, extendRent } from 'services/api/rentService';
import { toastError, toastSuccess } from 'services/toastService';
import { ToastContainer } from 'react-toastify';

const RentedBooksPage: React.FC = () => {
  const [notReturnedBooks, setNotReturnedBooks] = useState<RentedBookCopyOverview[]>([]);

  const cancelRentHandler = (id: string) => {
    cancelRent(id)
      .then(() => {
        toastSuccess(`Rent ${id} is now canceled.`);
        getAllNotReturnedRentedBooksHandler();
      })
      .catch(() => toastError('Something went wrong. Try again later.'));
  };

  const getAllNotReturnedRentedBooksHandler = () => {
    getAllNotReturnedRentedBooks()
      .then((data) => setNotReturnedBooks(data.content))
      .catch(() => toastError('Something went wrong. Try again later.'));
  };

  const extendRentHandler = (id: string, days: string) => {
    extendRent(id, days)
      .then(() => {
        toastSuccess(`Book ${id} rent extended for ${days} days.`);
        getAllNotReturnedRentedBooksHandler();
      })
      .catch(() => toastError('Something went wrong. Try again later.'));
  };

  useEffect(() => {
    getAllNotReturnedRentedBooksHandler();
  }, []);

  return (
    <div className={classes['c-rented-books']}>
      <h1>Not returned rented books</h1>
      <hr />
      <NotReturnedRentedBooks
        books={notReturnedBooks}
        cancelRentHandler={cancelRentHandler}
        extendRentHandler={extendRentHandler}
      />
      <h1>Mostly rented books</h1>
      <div>Put graph here</div>
      <ToastContainer />
    </div>
  );
};

export default RentedBooksPage;
