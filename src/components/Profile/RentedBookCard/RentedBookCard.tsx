import React from 'react';
import RentedBookCopy from 'model/RentedBookCopy';
import classes from './RentedBookCard.module.scss';
import RentedBookCopyOverview from 'model/RentedBookCopyOverview';
import Button from 'components/core/Button/Button';
import { Link } from 'react-router-dom';

interface RentedBookCardProps {
  history?: boolean;
  book: RentedBookCopyOverview;
  clickHandler?: (id: string) => void;
}

const RentedBookCard: React.FC<RentedBookCardProps> = ({
  book: { id, identifier, title, author, startRentDate, endRentDate },
  history,
  clickHandler
}) => {
  return (
    <div
      className={
        history
          ? `${classes['c-rented-book-card']} ${classes['c-rented-book-card--secondary']}`
          : `${classes['c-rented-book-card']}`
      }
    >
      <div>
        Rent id:{' '}
        <Link to={`/rent/${id}`} style={{ color: 'white' }}>
          {id}
        </Link>
      </div>
      <div>Book title: {title}</div>
      <div>Book author: {author}</div>
      <div>From: {startRentDate}</div>
      <div>To: {endRentDate}</div>
      {clickHandler ? (
        <Button clickHandler={() => clickHandler(id)} name="Cancel rent" type={'danger'} />
      ) : null}
    </div>
  );
};

export default RentedBookCard;
