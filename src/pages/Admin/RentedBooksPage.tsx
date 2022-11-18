import React from 'react';
import StandardLayout from 'components/Layout/StandardLayout';
import RentedBooks from 'components/RentedBook/RentedBooks';

const RentedBooksPage = () => {
  return (
    <StandardLayout>
      <RentedBooks />
    </StandardLayout>
  );
};

export default RentedBooksPage;
