import { BookInfoType } from '../types';
import Book from './Book';
import './style/bookList.css';

type BookListProps = {
  books: BookInfoType[]
};

export default function BookList(props: BookListProps) {
  const { books } = props;

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li className="book-item" key={ book.id }>
          <Book bookInfo={ book } showDetails={ false } />
        </li>
      ))}
    </ul>
  );
}
