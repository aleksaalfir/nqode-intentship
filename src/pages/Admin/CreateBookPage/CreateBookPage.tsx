import React, { useState } from 'react';
import Button from 'components/core/Button/Button';
import Input from 'components/core/Input/Input';
import classes from './CreateBookPage.module.scss';
import Book from 'model/Book';
import { useNavigate } from 'react-router-dom';
import { createBook } from 'services/api/bookService';
import { toastWarn, toastSuccess } from 'services/toastService';

const CreateBookPage: React.FC = () => {
  const [book, setBook] = useState<Book>({} as Book);
  const navigate = useNavigate();

  const changeHandler = (value: string, prop?: string): void => {
    setBook((prevBook) => ({ ...prevBook, [prop!]: value }));
  };

  const changeImageHandler = (file: File): void => {
    setBook((prevBook) => ({ ...prevBook, imagePath: file }));
  };

  const submitCreateBookHandler = () => {
    if (book.author === '' || book.description === '' || book.title === '' || book.imagePath === '')
      return toastWarn('Please fill all the fields.');
    createBook(book)
      .then(() => {
        toastSuccess('Book created.');
      })
      .catch(() => {
        navigate('/error-page');
      });
  };

  return (
    <div className={classes['c-create-book-form']}>
      <h1 className={classes['c-create-book-form__page-title']}>Crate new book</h1>
      <Input
        id="title"
        name="title"
        placeholder="Title"
        type="text"
        label="Title"
        setValue={changeHandler}
      />
      <Input
        id="author"
        name="author"
        placeholder="Author"
        type="text"
        label="Author"
        setValue={changeHandler}
      />
      <Input
        id="description"
        name="description"
        placeholder="Description"
        type="text"
        label="Description"
        setValue={changeHandler}
      />
      <div className={classes['c-create-book-form__file-input']}>
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          style={{ marginTop: '8px' }}
          onChange={(event) => changeImageHandler(event.target.files![0])}
        ></input>
      </div>
      <div className={classes['c-create-book-form__page-button']}>
        <Button name={'Create new book'} clickHandler={submitCreateBookHandler} type={'primary'} />
      </div>
    </div>
  );
};

export default CreateBookPage;
