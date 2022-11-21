import EditBook from 'components/Book/EditBook/EditBook';
import StandardLayout from 'components/Layout/StandardLayout';
import React from 'react';

const EditBookPage: React.FC = () => {
  return (
    <StandardLayout>
      <EditBook />
    </StandardLayout>
  );
};

export default EditBookPage;
