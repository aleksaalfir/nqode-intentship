import axios from '../../axios/axiosConfig';
import Book from 'model/Book';

export const getBook = (id: string) => {
  return axios.get(`/book/${id}`).then((res) => {
    return res.data;
  });
};

export const editBook = (id: string, book: Book) => {
  return axios.put<Book>(`/book/${id}`, book).then((res) => {
    return res.data;
  });
};

export const deleteBook = (id: string) => {
  return axios.delete<Book>(`/book/${id}`).then((res) => {
    return res.data;
  });
};

export const createBook = (book: Book) => {
  return axios.post(`/book`, book).then((res) => res);
};
