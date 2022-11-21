import ManageUsersPage from 'pages/Admin/ManageUsersPage';
import AdminBooksPage from 'pages/AdminBooksPage';
import CreateBookPage from 'pages/CreateBookPage';
import Login from 'pages/Login/Login';
import ProfilePage from 'pages/ProfilePage';
import UserBookPage from 'pages/User/UserBookPage';
import { Navigate, Route } from 'react-router-dom';
import authService from './authService';

const { isAdministrator, isUser } = authService;

const openRoutes = [{ path: '/login', element: <Login /> }];

const userRoutes = [
  { path: '/books', element: <AdminBooksPage /> },
  { path: '/profile', element: <ProfilePage /> },
  { path: '/book/:id', element: <UserBookPage /> }
];

const adminRoutes = [
  { path: '/books', element: <AdminBooksPage /> },
  { path: '/profile', element: <ProfilePage /> },
  { path: '/book/:id', element: <UserBookPage /> },
  { path: '/create-book', element: <CreateBookPage /> },
  { path: '/manage-users', element: <ManageUsersPage /> }
];

const getAllowedRoutes = () => {
  return isAdministrator() ? adminRoutes : isUser() ? userRoutes : openRoutes;
};

const getRedirect = () => {
  return isAdministrator() ? (
    <Route path="*" element={<Navigate to="/profile" />} />
  ) : isUser() ? (
    <Route path="*" element={<Navigate to="/books" />} />
  ) : (
    <Route path="*" element={<Navigate to="/login" />} />
  );
};

const routeService = { getAllowedRoutes, getRedirect };

export default routeService;
