import React, { useEffect, useState } from 'react';
import classes from './BookAbout.module.scss';
import image from 'util/327752.jpeg';
import { useParams } from 'react-router-dom';
import Book from 'model/Book';
import axios from '../../../axios/axiosConfig';
import Button from 'components/core/Button/Button';

const BookAbout: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book>({} as Book);

  const getBook = () => {
    axios.get(`/book/${id}`).then((res) => {
      setBook(res.data);
    });
  };

  useEffect(() => {
    getBook();
  }, [id]);

  return (
    <div className={classes['c-book-details']}>
      <div className={classes['c-book-details__image-holder']}>
        <img src={image} className={classes['c-book-details__image']} />
      </div>
      <div className={classes['c-book-details__about']}>
        <h1>{book.title}</h1>
        <div className={classes['c-book-details__author']}>{book.author}</div>
        <div className={classes['c-book-details__description']}>{book.description}</div>
        <div className={classes['c-book-details__copies']}>
          Number of copies : {book.numOfCopies}
        </div>
        <div className={classes['c-book-details__buttons']}>
          <Button name={'Rent'} type={'primary'} />
        </div>
      </div>
    </div>
  );
};

export default BookAbout;
