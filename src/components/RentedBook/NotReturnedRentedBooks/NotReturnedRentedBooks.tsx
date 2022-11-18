import React from 'react';
import RentedBookCard from 'components/Profile/RentedBookCard/RentedBookCard';
import RentedBookCopyOverview from 'model/RentedBookCopyOverview';
import classes from './NotReturnedRentedBooks.module.scss';
import rentService from 'services/rentService';

interface NotReturnedRentedBooksProps {
  books: RentedBookCopyOverview[];
  cancelRentHandler: (id: string) => void;
}

const NotReturnedRentedBooks: React.FC<NotReturnedRentedBooksProps> = ({
  books,
  cancelRentHandler
}) => {
  return (
    <div className={classes['c-not-returned-books']}>
      {books.length ? (
        books.map((book, index) => {
          return <RentedBookCard book={book} key={index} clickHandler={cancelRentHandler} />;
        })
      ) : (
        <div>There are no not returned books.</div>
      )}
    </div>
  );
};

export default NotReturnedRentedBooks;
