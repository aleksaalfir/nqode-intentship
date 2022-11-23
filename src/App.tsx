import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RouteList from 'components/Routes/RouteList';
import StandardLayout from 'components/Layout/StandardLayout';
import BooksPage from 'pages/BooksPage/BooksPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import BookAboutPage from 'pages/BookAboutPage/BookAboutPage';
import LoginPage from 'pages/Login/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<RouteList />} />
      </Routes>
    </Router>
  );
};

export default App;
