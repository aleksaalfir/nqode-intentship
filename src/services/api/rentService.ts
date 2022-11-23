import axios from '../../axios/axiosConfig';

export const getAllNotReturnedRentedBooks = () => {
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

export const cancelRent = (id: string) => {
  return axios.put(`/rent/close/${id}`).then((res) => res);
};

export const extendRent = (id: string, days: string) => {
  return axios.put(`/rent/${id}?additionalRentPeriod=${days}`).then((res) => res);
};

export const rentBook = (id: string, days: string) => {
  return axios.post(`/rent/book/${id}/user?rentPeriod=${days}`).then((res) => res);
};

export const getUserRentedBooks = (id: string, current: string) => {
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
