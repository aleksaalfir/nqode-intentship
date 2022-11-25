import React, { useState } from 'react';
import Button from 'components/core/Button/Button';
import Input from 'components/core/Input/Input';
import UserModel from 'model/UserModel';
import classes from './User.module.scss';

interface UserProps {
  user: UserModel;
  editUser: (id: string | number, user: UserModel) => void;
  deleteUser: (id: string | number) => void;
}

const User: React.FC<UserProps> = ({ user, editUser, deleteUser }) => {
  const [toggleDetails, setToggleDetails] = useState<boolean>(false);
  const [userValues, setUserValues] = useState<UserModel>(user);

  const changeUserValueHandler = (value: string, prop?: string) => {
    setUserValues((prevUserValues) => ({ ...prevUserValues, [prop!]: value }));
  };

  return (
    <div className={classes['c-user']}>
      <div
        className={classes['c-user__short-info']}
        onClick={() => setToggleDetails(!toggleDetails)}
      >
        <div>{userValues.id}</div>
        <div>{userValues.email}</div>
        <div>{userValues.phoneNumber}</div>
      </div>
      {toggleDetails ? (
        <div className={classes['c-user__all-details']}>
          <div className={classes['c-user__input-holder']}>
            <Input
              type={'text'}
              placeholder={'First name'}
              id={'firstName'}
              name={'firstName'}
              inputValue={userValues.firstName}
              setValue={changeUserValueHandler}
            />
            <Input
              type={'text'}
              placeholder={'Last name'}
              id={'lastName'}
              inputValue={userValues.lastName}
              name={'lastName'}
              setValue={changeUserValueHandler}
            />
          </div>
          <div className={classes['c-user__input-holder']}>
            <Input
              type={'text'}
              placeholder={'Email'}
              id={'email'}
              name={'email'}
              inputValue={userValues.email}
              setValue={changeUserValueHandler}
            />
            <Input
              type={'text'}
              placeholder={'Phone number'}
              id={'phoneNumber'}
              name={'phoneNumber'}
              inputValue={userValues.phoneNumber}
              setValue={changeUserValueHandler}
            />
          </div>
          <div className={classes['c-user__input-holder']}>
            <div className={classes['c-user__input']}>
              <Input
                type={'address'}
                placeholder={'Address'}
                id={'address'}
                inputValue={userValues.address}
                name={'address'}
                setValue={changeUserValueHandler}
              />
            </div>
            <div className={classes['c-user__button-holder']}>
              <Button
                name={'Edit'}
                clickHandler={() => editUser(userValues.id, userValues)}
                type={'secondary'}
              />
              <Button
                name={'Delete'}
                clickHandler={() => deleteUser(userValues.id)}
                type={'danger'}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default User;
