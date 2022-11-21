import axios from '../../axios/axiosConfig';

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
    .then((res) => res.data);
};

const cancelRent = (id: string) => {
  return axios.put(`/rent/close/${id}`).then((res) => res);
};

const extendRent = (id: string, days: string) => {
  return axios.put(`/rent/${id}?additionalRentPeriod=${days}`).then((res) => res);
};

const rentBook = (id: string, days: string) => {
  return axios.post(`/rent/book/${id}/user?rentPeriod=${days}`).then((res) => res);
};

const getUserRentedBooks = (id: string, current: string) => {
  return axios
    .get(`/rent/user/${id}`, {
      params: {
        current: current,
        page: 0,
        size: 10,
        sort: 'id'
      }
    })
    .then((res) => res.data);
};

const rentService = {
  getAllNotReturnedRentedBooks,
  cancelRent,
  extendRent,
  rentBook,
  getUserRentedBooks
};

export default rentService;
