import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RouteList from 'components/Routes/RouteList';

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
