import Button from 'components/core/Button/Button';
import Input from 'components/core/Input/Input';
import React from 'react';
import classes from './RentedBookDetails.module.scss';

const RentedBookDetails = () => {
  return (
    <div>
      <h1>Rented book details</h1>
      <div className={classes['c-rented-book-details']}>
        <div className={classes['c-rented-book-details__detail']}>Rent id:</div>
        <div className={classes['c-rented-book-details__detail']}>Identifier:</div>
        <div className={classes['c-rented-book-details__detail']}>User:</div>
        <div className={classes['c-rented-book-details__detail']}>Title:</div>
        <div className={classes['c-rented-book-details__detail']}>Author:</div>
        <div className={classes['c-rented-book-details__detail']}>Start rent date:</div>
        <div className={classes['c-rented-book-details__detail']}>End rent date:</div>
        <div className={classes['c-rented-book-details__detail']}>Cancel rent date:</div>
        <div className={classes['c-rented-book-details__extend-rent']}>
          <Input
            type={'number'}
            placeholder={'Days'}
            id={'days'}
            name={'days'}
            setValue={function (value: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <Button name={'Extend rent'} type={'primary'} />
        </div>
      </div>
    </div>
  );
};

export default RentedBookDetails;
