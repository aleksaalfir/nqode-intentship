import axios from '../../axios/axiosConfig';
import Book from 'model/Book';

const getBook = (id: string) => {
  return axios.get(`/book/${id}`).then((res) => {
    return res.data;
  });
};

const editBook = (id: string, book: Book) => {
  return axios.put<Book>(`/book/${id}`, book).then((res) => {
    return res.data;
  });
};

const deleteBook = (id: string) => {
  return axios.delete<Book>(`/book/${id}`).then((res) => {
    return res.data;
  });
};

const createBook = (book: Book) => {
  return axios.post(`/book`, book).then((res) => res);
};

const bookService = { getBook, editBook, deleteBook, createBook };

export default bookService;
