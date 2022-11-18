import StandardLayout from 'components/Layout/StandardLayout';
import RentedBookDetails from 'components/RentedBook/RentedBookDetails/RentedBookDetails';
import React from 'react';

const RentedBookPage = () => {
  return (
    <StandardLayout>
      <RentedBookDetails />
    </StandardLayout>
  );
};

export default RentedBookPage;
