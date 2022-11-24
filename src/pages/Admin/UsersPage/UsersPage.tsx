import React, { useState, useEffect } from 'react';
import classes from './UsersPage.module.scss';
import axios from '../../../axios/axiosConfig';
import User from '../../../components/Users/User/User';
import UserModel from 'model/UserModel';
import { ToastContainer, toast } from 'react-toastify';
import { toastError, toastSuccess, toastWarn } from 'services/toastService';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  const getUsers = (): void => {
    axios.get(`/user`).then((res) => {
      setUsers(res.data.content);
    });
  };

  document.title = 'Users';

  const editUser = (id: number | string, user: UserModel) => {
    if (
      user.address === '' ||
      user.email === '' ||
      user.firstName === '' ||
      user.lastName === '' ||
      user.phoneNumber === ''
    ) {
      return toastWarn('Please fill all the fields');
    }
    axios
      .put(`/user/${id}`, user)
      .then(() => {
        toastSuccess(`User with ID: ${id} updated!`);
      })
      .catch((err) => {
        toastError(`Something went wrong. Try again later.`);
      });
  };

  const deleteUser = (id: number | string): void => {
    axios
      .delete(`/user/${id}`)
      .then(() => {
        toastSuccess(`User with ID: ${id} deleted!`);
      })
      .catch((err) => {
        toastError(`Something went wrong. Try again later.`);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={classes['c-users']}>
      <div className={classes['c-users__table-head']}>
        <div>ID</div>
        <div>Email</div>
        <div>Phone number</div>
      </div>
      {users.length ? (
        users.map((user, index) => {
          return <User key={index} user={user} editUser={editUser} deleteUser={deleteUser} />;
        })
      ) : (
        <div>There are no users!</div>
      )}
      <ToastContainer />
    </div>
  );
};

export default UsersPage;
