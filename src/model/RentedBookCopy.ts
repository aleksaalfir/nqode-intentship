interface RentedBookCopy {
  id: number;
  userId: number;
  bookCopyId: number;
  startRentDate: string;
  endRentDate: string;
  cancelRentDate: null;
}

export default RentedBookCopy;
