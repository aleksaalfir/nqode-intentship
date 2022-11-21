import axios from '../../axios/axiosConfig';

interface BookCopy {
  id: null;
  identifier: string;
  bookId: string | undefined;
}

export const createBookCopy = (id: string | undefined, data: BookCopy) => {
  return axios
    .post(`/book/${id}/book-copy`, data)
    .then((res) => res)
    .catch((err) => err);
};
