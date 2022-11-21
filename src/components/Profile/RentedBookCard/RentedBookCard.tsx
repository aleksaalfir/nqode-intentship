import React, { useState } from 'react';
import RentedBookCopy from 'model/RentedBookCopy';
import classes from './RentedBookCard.module.scss';
import RentedBookCopyOverview from 'model/RentedBookCopyOverview';
import Button from 'components/core/Button/Button';
import { Link } from 'react-router-dom';
import Input from 'components/core/Input/Input';

interface RentedBookCardProps {
  history?: boolean;
  book: RentedBookCopyOverview;
  cancelRentHandler?: (id: string) => void;
  extendRentHandler?: (id: string, days: string) => void;
}

const RentedBookCard: React.FC<RentedBookCardProps> = ({
  book,
  history,
  cancelRentHandler,
  extendRentHandler
}) => {
  const [days, setDays] = useState<string>('');

  const changeDaysHandler = (value: string) => {
    setDays(value);
  };
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
        <Link to={`/rent/${book.id}`} style={{ color: 'white' }}>
          {book.id}
        </Link>
      </div>
      <div>Book title: {book.title}</div>
      <div>Book author: {book.author}</div>
      <div>From: {book.startRentDate}</div>
      <div style={{ marginBottom: '0.5rem' }}>To: {book.endRentDate}</div>
      {cancelRentHandler && extendRentHandler ? (
        <>
          <div className={classes['c-rented-book-card__extend-rent']}>
            <Input
              type={'number'}
              placeholder={'Days'}
              id={'days'}
              name={'days'}
              setValue={changeDaysHandler}
            />
            <div style={{ marginTop: '0.5rem' }}>
              <Button
                name={'Extend rent'}
                type={'secondary'}
                clickHandler={() => extendRentHandler(book.id, days)}
              />
              <Button
                clickHandler={() => cancelRentHandler(book.id)}
                name="Cancel rent"
                type="danger"
              />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default RentedBookCard;
