import React from 'react';
import RentedBookCard from 'components/Profile/RentedBookCard/RentedBookCard';
import RentedBookCopyOverview from 'model/RentedBookCopyOverview';
import classes from './NotReturnedRentedBooks.module.scss';

interface NotReturnedRentedBooksProps {
  books: RentedBookCopyOverview[];
  cancelRentHandler: (id: string) => void;
  extendRentHandler: (id: string, days: string) => void;
}

const NotReturnedRentedBooks: React.FC<NotReturnedRentedBooksProps> = ({
  books,
  cancelRentHandler,
  extendRentHandler
}) => {
  return (
    <div className={classes['c-not-returned-books']}>
      {books.length ? (
        books.map((book, index) => {
          return (
            <RentedBookCard
              book={book}
              key={index}
              cancelRentHandler={cancelRentHandler}
              extendRentHandler={extendRentHandler}
            />
          );
        })
      ) : (
        <div>There are no not returned books.</div>
      )}
    </div>
  );
};

export default NotReturnedRentedBooks;
