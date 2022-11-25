import React, { useState, useEffect } from 'react';
import classes from './UsersPage.module.scss';
import axios from '../../../axios/axiosConfig';
import User from '../../../components/Users/User/User';
import UserModel from 'model/UserModel';
import { ToastContainer } from 'react-toastify';
import { toastError, toastSuccess, toastWarn } from 'services/toastService';
import Button from 'components/core/Button/Button';
import Input from 'components/core/Input/Input';
import classesUser from '../../../components/Users/User/User.module.scss';

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [newUser, setNewUser] = useState<UserModel>({} as UserModel);

  const getUsers = (): void => {
    axios.get(`/user`).then((res) => {
      setUsers(res.data.content);
    });
  };

  const changeUserValueHandler = (value: string, prop?: string) => {
    setNewUser((prevNewUserValues) => ({ ...prevNewUserValues, [prop!]: value }));
  };

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
    if (!user.email.match(emailRegex)) return toastWarn('Your email is not in valid format.');
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

  const addUser = () => {
    if (
      newUser.email === '' ||
      newUser.address === '' ||
      newUser.firstName === '' ||
      newUser.lastName === '' ||
      newUser.phoneNumber === ''
    ) {
      return toastWarn('Please fill all the fields.');
    }

    if (!newUser.email.match(emailRegex)) return toastWarn('Your email is not in valid format.');
    axios
      .post('/user', newUser)
      .then(() => {
        getUsers();
        toastSuccess('New user created.');
      })
      .catch(() => {
        toastError('Something went wrong. Try again later.');
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={classes['c-users']}>
      <div className={classes['c-users__add-user']}>
        <div className={classesUser['c-user__all-details']}>
          <div style={{ textAlign: 'center', marginBottom: '8px', fontSize: '1.5rem' }}>
            Create new user
          </div>
          <div className={classesUser['c-user__input-holder']}>
            <Input
              type={'text'}
              placeholder={'First name'}
              id={'firstName'}
              name={'firstName'}
              setValue={changeUserValueHandler}
            />
            <Input
              type={'text'}
              placeholder={'Last name'}
              id={'lastName'}
              name={'lastName'}
              setValue={changeUserValueHandler}
            />
          </div>
          <div className={classesUser['c-user__input-holder']}>
            <Input
              type={'text'}
              placeholder={'Email'}
              id={'email'}
              name={'email'}
              setValue={changeUserValueHandler}
            />
            <Input
              type={'text'}
              placeholder={'Phone number'}
              id={'phoneNumber'}
              name={'phoneNumber'}
              setValue={changeUserValueHandler}
            />
          </div>
          <div className={classesUser['c-user__input-holder']}>
            <div className={classesUser['c-user__input']}>
              <Input
                type={'address'}
                placeholder={'Address'}
                id={'address'}
                name={'address'}
                setValue={changeUserValueHandler}
              />
            </div>
            <div className={classesUser['c-user__button-holder']}>
              <Button name={'Add user'} type={'primary'} clickHandler={addUser} />
            </div>
          </div>
        </div>
      </div>
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
