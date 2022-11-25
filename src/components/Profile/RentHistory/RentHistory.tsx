import React from 'react';
import classes from './RentHistory.module.scss';
import RentedBookCard from '../RentedBookCard/RentedBookCard';
import RentedBookCopyOverview from 'model/RentedBookCopyOverview';

interface RentHistoryProps {
  rentHistory: RentedBookCopyOverview[];
}

const RentHistory: React.FC<RentHistoryProps> = ({ rentHistory }) => {
  return (
    <div className={classes['c-rented-books']}>
      <h1 className={classes['c-rented-books__title']}>Rent history</h1>
      <div className={classes['c-rented-books__books']}>
        {rentHistory.length ? (
          rentHistory.map((book, i) => {
            return <RentedBookCard key={i} history={true} book={book} />;
          })
        ) : (
          <div>Your history is empty!</div>
        )}
      </div>
    </div>
  );
};

export default RentHistory;
