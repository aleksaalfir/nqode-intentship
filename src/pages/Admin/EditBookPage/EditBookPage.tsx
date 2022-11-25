/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Button from 'components/core/Button/Button';
import image from './book.jpg';
import classes from './EditBookPage.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { getBook, editBook, deleteBook } from 'services/api/bookService';
import Input from 'components/core/Input/Input';
import Book from 'model/Book';
import { toastError, toastSuccess, toastWarn } from 'services/toastService';
import { ToastContainer } from 'react-toastify';

const EditBookPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState<Book>({} as Book);

  const changeTitleHandler = (value: string): void => {
    setBook((prevBook) => ({ ...prevBook, title: value }));
  };

  const changeAuthorHandler = (value: string): void => {
    setBook((prevBook) => ({ ...prevBook, author: value }));
  };

  const changeDescriptionHandler = (value: string): void => {
    setBook((prevBook) => ({ ...prevBook, description: value }));
  };

  const deleteBookHandler = (): void => {
    deleteBook(book.id)
      .then((res) => {
        toastSuccess('Book successfully deleted.');
        navigate('/books');
      })
      .catch(() => toastError('Something went wrong. Try again later.'));
  };

  const editBookHandler = () => {
    if (book.author === '' || book.description === '' || book.title === '')
      return toastWarn('Please fill all the fields.');

    editBook(book.id, book)
      .then((data) => {
        setBook(data);
        toastSuccess('Book successfully updated.');
      })
      .catch(() => toastError('Something went wrong. Try again later.'));
  };

  const getBookHanlder = () => {
    getBook(id!)
      .then((res) => {
        setBook(res);
      })
      .catch(() => toastError('Something went wrong. Try again later.'));
  };

  useEffect(() => {
    getBookHanlder();
  }, [id]);

  return (
    <div className={classes['c-book-details']}>
      <div className={classes['c-book-details__image-holder']}>
        <img src={image} className={classes['c-book-details-image']} alt="book-ss-about" />
      </div>
      <div className={classes['c-book-details__about']}>
        <Input
          type={'text'}
          placeholder={'Title'}
          value={book.title}
          id={'title'}
          label={'Title'}
          name={'title'}
          setValue={changeTitleHandler}
        />
        <div className={classes['c-book-details__author']}>
          <Input
            type={'text'}
            placeholder={'Author'}
            id={'author'}
            label={'Author'}
            value={book.author}
            name={'author'}
            setValue={changeAuthorHandler}
          />
        </div>
        <div className={classes['c-book-details__description']}>
          <Input
            type={'text'}
            placeholder={'Description'}
            id={'description'}
            label={'Description'}
            value={book.description}
            name={'description'}
            setValue={changeDescriptionHandler}
          />
        </div>
        <div className={classes['c-book-details__copies']}>
          Number of copies : {book.numOfCopies}
        </div>
        <div className={classes['c-book-details__buttons']}>
          <Button name="Edit" type="secondary" clickHandler={editBookHandler} />
          <Button name="Delete" type="danger" clickHandler={deleteBookHandler} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditBookPage;
