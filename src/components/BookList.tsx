// import trash from '../assets/trash.png';
import { BookInfoType } from '../types';
import Book from './Book';
import './style/bookList.css';

type BookListProps = {
  books: BookInfoType[];
  getRemoveFunction: (bookId: number) => void;
};

export default function BookList(props: BookListProps) {
  const { books, getRemoveFunction } = props;

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li className="book-item" key={ book.id }>
          <Book bookInfo={ book } showDetails={ false } />
          <button
            className="button-trash"
            onClick={ () => getRemoveFunction(book.id) }
          >
            .
          </button>
        </li>
      ))}
    </ul>
  );
}
