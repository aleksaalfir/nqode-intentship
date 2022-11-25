import React from 'react';
import StandardLayout from 'components/Layout/StandardLayout';
import CreateBookPage from 'pages/Admin/CreateBookPage/CreateBookPage';
import EditBookPage from 'pages/Admin/EditBookPage/EditBookPage';
import RentedBooksPage from 'pages/Admin/RentedBooksPage/RentedBooksPage';
import UsersPage from 'pages/Admin/UsersPage/UsersPage';
import BookAboutPage from 'pages/BookAboutPage/BookAboutPage';
import BooksPage from 'pages/BooksPage/BooksPage';
import LoginPage from 'pages/Login/LoginPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import { Route, Routes } from 'react-router-dom';
import { isAdministrator, isUser } from '../../services/authService';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Dashboard from 'components/Layout/Dashboard/Dashboard';

const RouteList = () => {
  const getOpenRoutes = () => {
    return (
      <React.Fragment>
        <Route path="/" element={<LoginPage />} />{' '}
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
      </React.Fragment>
    );
  };

  const getAdminRoutes = () => {
    return (
      <React.Fragment>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/books" element={<BooksPage />} />
          <Route path="/dashboard/profile" element={<ProfilePage />} />
          <Route path="/dashboard/book/:id" element={<BookAboutPage />} />
          <Route path="/dashboard/create-book" element={<CreateBookPage />} />
          <Route path="/dashboard/manage-users" element={<UsersPage />} />
          <Route path="/dashboard/rents" element={<RentedBooksPage />} />
          <Route path="/dashboard/book/edit/:id" element={<EditBookPage />} />
        </Route>
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

  return (
    <Routes>
      {getAllowedRoutes()}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouteList;
