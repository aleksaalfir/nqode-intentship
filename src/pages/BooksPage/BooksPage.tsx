import React, { useEffect, useState } from 'react';
import axios from '../../axios/axiosConfig';
import BookCard from '../../components/Book/BookCard/BookCard';
import classes from './BooksPage.module.scss';
import Book from 'model/Book';
import Input from 'components/core/Input/Input';
import Button from 'components/core/Button/Button';
import { getBooks } from 'services/api/bookService';

const BooksPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');

  const searchBooksHandler = (): void => {
    getBooks().then((data) => {
      const { content: dataBooks } = data;

      setBooks(
        dataBooks.filter(
          (book: Book) =>
            book.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) ||
            book.author.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
        )
      );
    });
  };

  useEffect(() => {
    getBooks().then((data) => setBooks(data.content));
  }, []);

  return (
    <div className={classes['c-admin-books']}>
      <div className={classes['c-admin-books__search-section']}>
        <div className={classes['c-admin-books__search']}>
          <Input
            type="search"
            placeholder={'Search'}
            id={'search'}
            name={'search'}
            setValue={setSearchInput}
          />
          <Button name={'Search'} type={'primary'} clickHandler={searchBooksHandler} />
        </div>
      </div>
      <div className={classes['c-admin-books__books']}>
        {books.map((book, index) => {
          return <BookCard book={book} key={index} />;
        })}
      </div>
    </div>
  );
};

export default BooksPage;
