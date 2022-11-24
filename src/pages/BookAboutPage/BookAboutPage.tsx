import React, { useEffect, useState } from 'react';
import classes from './BookAboutPage.module.scss';
import image from 'util/327752.jpeg';
import { Link, useParams } from 'react-router-dom';
import Book from 'model/Book';
import Button from 'components/core/Button/Button';
import { isAdministrator } from 'services/authService';
import Input from 'components/core/Input/Input';
import { getBook } from 'services/api/bookService';
import { rentBook } from 'services/api/rentService';
import { createBookCopy } from 'services/api/bookCopyService';
import { toastError, toastSuccess } from 'services/toastService';
import { ToastContainer } from 'react-toastify';

interface BookCopy {
  id: null;
  identifier: string;
  bookId: string;
}
document.title = 'Book';

const BookAboutPage: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book>({} as Book);
  const [days, setDays] = useState<string>('');

  const fetchBookHandler = () => {
    getBook(id!).then((data) => setBook(data));
  };

  const rentBookHandler = () => {
    rentBook(book.id, days)
      .then(() => {
        toastSuccess(`You have successfully rented this book for ${days} days.`);
      })
      .catch(() => toastError('Something went wrong. Try again later.'));
  };

  const createBookCopyHandler = () => {
    const data: BookCopy = { id: null, identifier: crypto.randomUUID(), bookId: `${book.id}` };
    createBookCopy(id, data)
      .then(() => {
        toastSuccess(`Book copy created!`);
        fetchBookHandler();
      })
      .catch(() => toastError('Something went wrong. Try again later.'));
  };

  const changeDaysHandler = (value: string) => {
    setDays(value);
  };

  useEffect(() => {
    fetchBookHandler();
  }, [id]);

  return (
    <div className={classes['c-book-details']}>
      <div className={classes['c-book-details__image-holder']}>
        <img src={image} className={classes['c-book-details__image']} />
      </div>
      <div className={classes['c-book-details__about']}>
        <h1>{book.title}</h1>
        <div className={classes['c-book-details__author']}>{book.author}</div>
        <div className={classes['c-book-details__description']}>About book: {book.description}</div>
        <div className={classes['c-book-details__copies']}>
          Number of copies : {book.numOfCopies}
        </div>
        <div className={classes['c-book-details__days']}>
          <div className={classes['c-book-details__days-explained']}>
            {`Days (Renting will start from today):`}
          </div>
          <Input
            type={'number'}
            placeholder={'Days'}
            id={'days'}
            name={'days'}
            setValue={changeDaysHandler}
          />
          <div className={classes['c-book-details__buttons']}>
            <Button name={'Rent'} clickHandler={rentBookHandler} type={'primary'} />
            {isAdministrator() ? (
              <Button
                name={'Create copy'}
                clickHandler={createBookCopyHandler}
                type={'secondary'}
              />
            ) : null}
            {isAdministrator() ? (
              <Link to={`/dashboard/book/edit/${book.id}`}>Edit book</Link>
            ) : null}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookAboutPage;
