import StandardLayout from 'components/Layout/StandardLayout';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAllowedRoutes, getRedirect } from 'services/routeService';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {getAllowedRoutes().map((route, index) => {
          return (
            <Route
              path={route.path}
              element={
                route.layout ? <StandardLayout>{route.element}</StandardLayout> : route.element
              }
              key={index}
            />
          );
        })}
        {getRedirect()}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
