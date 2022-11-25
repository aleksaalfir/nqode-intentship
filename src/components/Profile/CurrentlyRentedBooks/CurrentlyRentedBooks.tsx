import React from 'react';
import classes from './CurrentlyRentedBooks.module.scss';
import RentedBookCard from '../RentedBookCard/RentedBookCard';
import RentedBookCopyOverview from 'model/RentedBookCopyOverview';

interface CurrentlyRentedBooksProps {
  currentlyRentedBooks: RentedBookCopyOverview[];
}

const CurrentlyRentedBooks: React.FC<CurrentlyRentedBooksProps> = ({ currentlyRentedBooks }) => {
  return (
    <div className={classes['c-rented-books']}>
      <h1 className={classes['c-rented-books__title']}>Currently rented books</h1>
      <div className={classes['c-rented-books__books']}>
        {currentlyRentedBooks.length ? (
          currentlyRentedBooks.map((book, i) => {
            return <RentedBookCard key={i} book={book} />;
          })
        ) : (
          <div>You don't have any rented books!</div>
        )}
      </div>
    </div>
  );
};

export default CurrentlyRentedBooks;
