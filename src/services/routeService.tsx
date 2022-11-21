import CreateBookPage from 'pages/Admin/CreateBookPage/CreateBookPage';
import EditBookPage from 'pages/Admin/EditBookPage/EditBookPage';
import RentedBooksPage from 'pages/Admin/RentedBooksPage/RentedBooksPage';
import UsersPage from 'pages/Admin/UsersPage/UsersPage';
import BookAboutPage from 'pages/BookAboutPage/BookAboutPage';
import BooksPage from 'pages/BooksPage/BooksPage';
import Login from 'pages/Login/LoginPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import { Navigate, Route } from 'react-router-dom';
import { isAdministrator, isUser } from './authService';

const openRoutes = [{ path: '/login', element: <Login />, layout: false }];

const userRoutes = [
  { path: '/books', element: <BooksPage />, layout: true },
  { path: '/profile', element: <ProfilePage />, layout: true },
  { path: '/book/:id', element: <BookAboutPage />, layout: true }
];

const adminRoutes = [
  { path: '/books', element: <BooksPage />, layout: true },
  { path: '/profile', element: <ProfilePage />, layout: true },
  { path: '/book/:id', element: <BookAboutPage />, layout: true },
  { path: '/create-book', element: <CreateBookPage />, layout: true },
  { path: '/manage-users', element: <UsersPage />, layout: true },
  { path: '/rents', element: <RentedBooksPage />, layout: true },
  { path: '/book/edit/:id', element: <EditBookPage />, layout: true }
];

export const getAllowedRoutes = () => {
  return isAdministrator() ? adminRoutes : isUser() ? userRoutes : openRoutes;
};

export const getRedirect = () => {
  return isAdministrator() ? (
    <Route path="*" element={<Navigate to="/profile" />} />
  ) : isUser() ? (
    <Route path="*" element={<Navigate to="/books" />} />
  ) : (
    <Route path="*" element={<Navigate to="/login" />} />
  );
};
