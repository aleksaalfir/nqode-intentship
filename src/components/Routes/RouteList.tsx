import React, { ReactFragment } from 'react';
import StandardLayout from 'components/Layout/StandardLayout';
import CreateBookPage from 'pages/Admin/CreateBookPage/CreateBookPage';
import EditBookPage from 'pages/Admin/EditBookPage/EditBookPage';
import RentedBooksPage from 'pages/Admin/RentedBooksPage/RentedBooksPage';
import UsersPage from 'pages/Admin/UsersPage/UsersPage';
import BookAboutPage from 'pages/BookAboutPage/BookAboutPage';
import BooksPage from 'pages/BooksPage/BooksPage';
import LoginPage from 'pages/Login/LoginPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import { Navigate, Route, RouteObject, Routes } from 'react-router-dom';
import { isAdministrator, isUser } from '../../services/authService';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const RouteList = () => {
  const getOpenRoutes = () => {
    return (
      <React.Fragment>
        <Route path="/login" element={<LoginPage />} />{' '}
        <Route path="*" element={<NotFoundPage />} />
      </React.Fragment>
    );
  };

  const getUserRoutes = () => {
    return (
      <React.Fragment>
        <Route
          path="/books"
          element={
            <StandardLayout>
              <BooksPage />
            </StandardLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <StandardLayout>
              <ProfilePage />
            </StandardLayout>
          }
        />
        <Route
          path="/book/:id"
          element={
            <StandardLayout>
              <BookAboutPage />
            </StandardLayout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </React.Fragment>
    );
  };

  const getAdminRoutes = () => {
    return (
      <React.Fragment>
        <Route
          path="/books"
          element={
            <StandardLayout>
              <BooksPage />
            </StandardLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <StandardLayout>
              <ProfilePage />
            </StandardLayout>
          }
        />
        <Route
          path="/book/:id"
          element={
            <StandardLayout>
              <BookAboutPage />
            </StandardLayout>
          }
        />
        <Route
          path="/create-book"
          element={
            <StandardLayout>
              <CreateBookPage />
            </StandardLayout>
          }
        />
        <Route
          path="/manage-users"
          element={
            <StandardLayout>
              <UsersPage />
            </StandardLayout>
          }
        />
        <Route
          path="/rents"
          element={
            <StandardLayout>
              <RentedBooksPage />
            </StandardLayout>
          }
        />
        <Route
          path="/book/edit/:id"
          element={
            <StandardLayout>
              <EditBookPage />
            </StandardLayout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </React.Fragment>
    );
  };

  const getAllowedRoutes = () => {
    if (isAdministrator()) {
      return getAdminRoutes();
    }
    if (isUser()) {
      return getUserRoutes();
    }
    return getOpenRoutes();
  };

  return <Routes>{getAllowedRoutes()}</Routes>;
};

export default RouteList;
