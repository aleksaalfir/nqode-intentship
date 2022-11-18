import axios from '../axios/axiosConfig';

const getAllNotReturnedRentedBooks = () => {
  return axios
    .get('/rent/book', {
      params: {
        current: 'true',
        page: 0,
        size: 10,
        sort: 'id'
      }
    })
    .then((res) => res.data)
    .catch((err) => err);
};

const cancelRent = (id: string) => {
  return axios
    .put(`/rent/close/${id}`)
    .then((res) => res)
    .catch((err) => err);
};

const rentService = { getAllNotReturnedRentedBooks, cancelRent };

export default rentService;
