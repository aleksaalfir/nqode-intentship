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
    .then((res) => res.data)
    .catch((err) => err);
};

const cancelRent = (id: string) => {
  return axios
    .put(`/rent/close/${id}`)
    .then((res) => res)
    .catch((err) => err);
};

const extendRent = (id: string, days: string) => {
  return axios
    .put(`/rent/${id}?additionalRentPeriod=${days}`)
    .then((res) => res)
    .catch((err) => err);
};

const rentBook = (id: string, days: string) => {
  return axios
    .post(`/rent/book/${id}/user?rentPeriod=${days}`)
    .then((res) => res)
    .catch((err) => err);
};

const rentService = { getAllNotReturnedRentedBooks, cancelRent, extendRent, rentBook };

export default rentService;
