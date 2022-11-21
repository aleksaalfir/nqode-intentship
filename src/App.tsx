import React from 'react';
import CreateBookPage from 'pages/CreateBookPage';
import Login from 'pages/Login/Login';
import AdminBooksPage from 'pages/AdminBooksPage';
import ProfilePage from 'pages/ProfilePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserBookPage from 'pages/User/UserBookPage';
import ManageUsersPage from 'pages/Admin/ManageUsersPage';
import routeService from 'services/routeService';

const App = () => {
  const { getAllowedRoutes, getRedirect } = routeService;

  return (
    <BrowserRouter>
      <Routes>
        {getAllowedRoutes().map((route, index) => {
          return <Route path={route.path} element={route.element} key={index} />;
        })}
        {getRedirect()}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
