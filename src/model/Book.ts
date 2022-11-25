export default interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  imagePath: string | File;
  numOfCopies: number;
}
