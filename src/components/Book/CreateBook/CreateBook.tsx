import React, { useState } from 'react';
import Button from 'components/core/Button/Button';
import Input from 'components/core/Input/Input';
import classes from './CreateBook.module.scss';
import Book from 'model/Book';
import { useNavigate } from 'react-router-dom';
import bookService from 'services/api/bookService';

const CreateBook: React.FC = () => {
  const [book, setBook] = useState<Book>({} as Book);
  const navigate = useNavigate();
  const { createBook } = bookService;

  const changeHandler = (value: string, prop?: string): void => {
    setBook((prevBook) => ({ ...prevBook, [prop!]: value }));
  };

  const changeImageHandler = (file: File): void => {
    setBook((prevBook) => ({ ...prevBook, imagePath: file }));
  };

  const submitCreateBookHandler = () => {
    createBook(book)
      .then((res) => {
        //TODO navigate to page with details about new book
        navigate('/');
      })
      .catch(() => {
        //TODO create error page
        navigate('/error-page');
      });
  };

  return (
    <div className={classes['c-create-book-form']}>
      <h1 className={classes['c-create-book-form__page_title']}>Crate new book</h1>
      <Input
        id="title"
        name="title"
        placeholder="title..."
        type="text"
        label="Title"
        setValue={changeHandler}
      />
      <Input
        id="author"
        name="author"
        placeholder="author..."
        type="text"
        label="Author"
        setValue={changeHandler}
      />
      <Input
        id="description"
        name="description"
        placeholder="description..."
        type="text"
        label="Description"
        setValue={changeHandler}
      />
      <div className={classes['c-create-book-form__file_input']}>
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          style={{ marginTop: '8px' }}
          onChange={(event) => changeImageHandler(event.target.files![0])}
        ></input>
      </div>
      <div className={classes['c-create-book-form__page_button']}>
        <Button name={'Create new book'} clickHandler={submitCreateBookHandler} type={'primary'} />
      </div>
    </div>
  );
};

export default CreateBook;
