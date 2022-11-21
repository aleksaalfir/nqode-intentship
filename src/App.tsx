import React from 'react';
import CreateBookPage from 'pages/CreateBookPage';
import Login from 'pages/Login/Login';
import AdminBooksPage from 'pages/AdminBooksPage';
import ProfilePage from 'pages/ProfilePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserBookPage from 'pages/User/UserBookPage';
import ManageUsersPage from 'pages/Admin/ManageUsersPage';
<<<<<<< HEAD
import EditBookPage from 'pages/Admin/EditBookPage';
import RentedBooksPage from 'pages/Admin/RentedBooksPage';
import RentedBookPage from 'pages/Admin/RentedBookPage';
=======
import routeService from 'services/routeService';
>>>>>>> 13a6a2d (NavBar links and routes implemented)

const App = () => {
  const { getAllowedRoutes, getRedirect } = routeService;

  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<AdminBooksPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/book/:id" element={<UserBookPage />} />
        <Route path="/create-book" element={<CreateBookPage />} />
        <Route path="/manage-users" element={<ManageUsersPage />} />
        <Route path="/book/edit/:id" element={<EditBookPage />} />
        <Route path="/rents" element={<RentedBooksPage />} />
        <Route path="/rent/:id" element={<RentedBookPage />} />
=======
        {getAllowedRoutes().map((route, index) => {
          return <Route path={route.path} element={route.element} key={index} />;
        })}
        {getRedirect()}
>>>>>>> 13a6a2d (NavBar links and routes implemented)
      </Routes>
    </BrowserRouter>
  );
};

export default App;
