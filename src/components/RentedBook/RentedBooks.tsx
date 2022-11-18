import React, { useEffect, useState } from 'react';
import RentedBookCard from 'components/Profile/RentedBookCard/RentedBookCard';
import RentedBookCopyOverview from 'model/RentedBookCopyOverview';
import classes from './RentedBook.module.scss';
import NotReturnedRentedBooks from './NotReturnedRentedBooks/NotReturnedRentedBooks';
import rentService from 'services/rentService';

const RentedBooks: React.FC = () => {
  const [notReturnedBooks, setNotReturnedBooks] = useState<RentedBookCopyOverview[]>([]);

  const { getAllNotReturnedRentedBooks, cancelRent } = rentService;

  const cancelRentHandler = (id: string) => {
    cancelRent(id)
      .then(() => {
        getAllNotReturnedRentedBooksHandler();
      })
      .catch((err) => console.log(err));
  };

  const getAllNotReturnedRentedBooksHandler = () => {
    getAllNotReturnedRentedBooks()
      .then((data) => setNotReturnedBooks(data.content))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllNotReturnedRentedBooksHandler();
  }, []);

  return (
    <div className={classes['c-rented-books']}>
      <h1>Not returned rented books</h1>
      <hr />
      <NotReturnedRentedBooks books={notReturnedBooks} cancelRentHandler={cancelRentHandler} />
      <h1>Mostly rented books</h1>
      <div>Put graph here</div>
    </div>
  );
};

export default RentedBooks;
